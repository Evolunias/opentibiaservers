import ArchlightFunServerKeywordPage, { generateMetadata } from './archlight-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightFunServerKeywordPage />;
}

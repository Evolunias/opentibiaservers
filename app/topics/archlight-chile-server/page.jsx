import ArchlightChileServerKeywordPage, { generateMetadata } from './archlight-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightChileServerKeywordPage />;
}

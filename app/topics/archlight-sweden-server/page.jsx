import ArchlightSwedenServerKeywordPage, { generateMetadata } from './archlight-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightSwedenServerKeywordPage />;
}

import ArchlightArgentinaServersKeywordPage, { generateMetadata } from './archlight-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightArgentinaServersKeywordPage />;
}

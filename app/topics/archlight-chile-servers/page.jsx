import ArchlightChileServersKeywordPage, { generateMetadata } from './archlight-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightChileServersKeywordPage />;
}

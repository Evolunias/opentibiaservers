import ArchlightBrazilServersKeywordPage, { generateMetadata } from './archlight-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightBrazilServersKeywordPage />;
}

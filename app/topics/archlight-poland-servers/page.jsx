import ArchlightPolandServersKeywordPage, { generateMetadata } from './archlight-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightPolandServersKeywordPage />;
}

import ArchlightMexicoServersKeywordPage, { generateMetadata } from './archlight-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightMexicoServersKeywordPage />;
}

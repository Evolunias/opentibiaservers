import ArchlightMexicoServerKeywordPage, { generateMetadata } from './archlight-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightMexicoServerKeywordPage />;
}

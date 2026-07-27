import ClassicusMexicoServersKeywordPage, { generateMetadata } from './classicus-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusMexicoServersKeywordPage />;
}

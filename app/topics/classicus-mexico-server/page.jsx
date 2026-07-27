import ClassicusMexicoServerKeywordPage, { generateMetadata } from './classicus-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusMexicoServerKeywordPage />;
}

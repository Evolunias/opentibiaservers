import ThaisotMexicoServersKeywordPage, { generateMetadata } from './thaisot-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotMexicoServersKeywordPage />;
}

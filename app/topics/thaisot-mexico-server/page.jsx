import ThaisotMexicoServerKeywordPage, { generateMetadata } from './thaisot-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotMexicoServerKeywordPage />;
}

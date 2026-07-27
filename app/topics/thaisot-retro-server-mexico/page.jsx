import ThaisotRetroServerMexicoKeywordPage, { generateMetadata } from './thaisot-retro-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotRetroServerMexicoKeywordPage />;
}

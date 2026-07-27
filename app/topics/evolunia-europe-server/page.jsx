import EvoluniaEuropeServerKeywordPage, { generateMetadata } from './evolunia-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaEuropeServerKeywordPage />;
}

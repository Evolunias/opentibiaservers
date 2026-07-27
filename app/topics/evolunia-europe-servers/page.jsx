import EvoluniaEuropeServersKeywordPage, { generateMetadata } from './evolunia-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaEuropeServersKeywordPage />;
}

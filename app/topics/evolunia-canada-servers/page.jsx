import EvoluniaCanadaServersKeywordPage, { generateMetadata } from './evolunia-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaCanadaServersKeywordPage />;
}

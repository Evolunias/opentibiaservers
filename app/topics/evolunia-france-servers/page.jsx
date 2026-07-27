import EvoluniaFranceServersKeywordPage, { generateMetadata } from './evolunia-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaFranceServersKeywordPage />;
}

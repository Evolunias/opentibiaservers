import TibiantisFranceServersKeywordPage, { generateMetadata } from './tibiantis-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisFranceServersKeywordPage />;
}

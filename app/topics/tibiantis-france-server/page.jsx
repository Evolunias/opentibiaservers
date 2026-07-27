import TibiantisFranceServerKeywordPage, { generateMetadata } from './tibiantis-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisFranceServerKeywordPage />;
}

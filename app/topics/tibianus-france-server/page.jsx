import TibianusFranceServerKeywordPage, { generateMetadata } from './tibianus-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusFranceServerKeywordPage />;
}

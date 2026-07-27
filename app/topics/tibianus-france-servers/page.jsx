import TibianusFranceServersKeywordPage, { generateMetadata } from './tibianus-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusFranceServersKeywordPage />;
}

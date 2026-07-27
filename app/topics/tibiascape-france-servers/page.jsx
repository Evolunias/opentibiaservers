import TibiascapeFranceServersKeywordPage, { generateMetadata } from './tibiascape-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeFranceServersKeywordPage />;
}

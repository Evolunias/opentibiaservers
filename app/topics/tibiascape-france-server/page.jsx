import TibiascapeFranceServerKeywordPage, { generateMetadata } from './tibiascape-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeFranceServerKeywordPage />;
}

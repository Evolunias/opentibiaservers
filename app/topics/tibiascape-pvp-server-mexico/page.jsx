import TibiascapePvpServerMexicoKeywordPage, { generateMetadata } from './tibiascape-pvp-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapePvpServerMexicoKeywordPage />;
}

import TibiascapePvpKeywordPage, { generateMetadata } from './tibiascape-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapePvpKeywordPage />;
}

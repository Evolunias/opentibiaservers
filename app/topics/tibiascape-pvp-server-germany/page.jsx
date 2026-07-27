import TibiascapePvpServerGermanyKeywordPage, { generateMetadata } from './tibiascape-pvp-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapePvpServerGermanyKeywordPage />;
}

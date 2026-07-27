import PvpTibiascapeServerKeywordPage, { generateMetadata } from './pvp-tibiascape-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpTibiascapeServerKeywordPage />;
}

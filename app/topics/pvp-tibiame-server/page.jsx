import PvpTibiameServerKeywordPage, { generateMetadata } from './pvp-tibiame-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpTibiameServerKeywordPage />;
}

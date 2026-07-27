import NonPvpTibiameServerKeywordPage, { generateMetadata } from './non-pvp-tibiame-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpTibiameServerKeywordPage />;
}

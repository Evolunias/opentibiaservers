import PvpeTibiameServerKeywordPage, { generateMetadata } from './pvpe-tibiame-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeTibiameServerKeywordPage />;
}

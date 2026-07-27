import TibiameSeasonKeywordPage, { generateMetadata } from './tibiame-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameSeasonKeywordPage />;
}

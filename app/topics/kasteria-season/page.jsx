import KasteriaSeasonKeywordPage, { generateMetadata } from './kasteria-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaSeasonKeywordPage />;
}

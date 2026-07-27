import MyaacSeasonKeywordPage, { generateMetadata } from './myaac-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MyaacSeasonKeywordPage />;
}

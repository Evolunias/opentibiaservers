import NepreniaSeasonKeywordPage, { generateMetadata } from './neprenia-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaSeasonKeywordPage />;
}

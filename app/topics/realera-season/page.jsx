import RealeraSeasonKeywordPage, { generateMetadata } from './realera-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraSeasonKeywordPage />;
}

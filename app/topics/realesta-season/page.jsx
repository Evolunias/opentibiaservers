import RealestaSeasonKeywordPage, { generateMetadata } from './realesta-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaSeasonKeywordPage />;
}

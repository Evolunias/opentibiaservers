import ImperianicSeasonKeywordPage, { generateMetadata } from './imperianic-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicSeasonKeywordPage />;
}

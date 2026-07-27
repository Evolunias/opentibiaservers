import OxygenotSeasonKeywordPage, { generateMetadata } from './oxygenot-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotSeasonKeywordPage />;
}

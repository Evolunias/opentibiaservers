import KoliseuotSeasonServerReviewPage, { generateMetadata } from './koliseuot-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KoliseuotSeasonServerReviewPage />;
}

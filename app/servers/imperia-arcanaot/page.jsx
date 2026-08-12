import ImperiaArcanaotServerReviewPage, { generateMetadata } from './imperia-arcanaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperiaArcanaotServerReviewPage />;
}

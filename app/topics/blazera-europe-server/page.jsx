import BlazeraEuropeServerKeywordPage, { generateMetadata } from './blazera-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraEuropeServerKeywordPage />;
}

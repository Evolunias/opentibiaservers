import FreshStartRubinotClientKeywordPage, { generateMetadata } from './fresh-start-rubinot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRubinotClientKeywordPage />;
}

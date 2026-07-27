import NewRubinotClientKeywordPage, { generateMetadata } from './new-rubinot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRubinotClientKeywordPage />;
}

import CurrentRubinotClientKeywordPage, { generateMetadata } from './current-rubinot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRubinotClientKeywordPage />;
}

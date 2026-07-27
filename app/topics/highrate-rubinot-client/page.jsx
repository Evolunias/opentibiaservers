import HighrateRubinotClientKeywordPage, { generateMetadata } from './highrate-rubinot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRubinotClientKeywordPage />;
}

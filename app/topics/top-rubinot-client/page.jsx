import TopRubinotClientKeywordPage, { generateMetadata } from './top-rubinot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRubinotClientKeywordPage />;
}

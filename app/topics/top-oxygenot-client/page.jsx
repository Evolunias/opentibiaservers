import TopOxygenotClientKeywordPage, { generateMetadata } from './top-oxygenot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOxygenotClientKeywordPage />;
}

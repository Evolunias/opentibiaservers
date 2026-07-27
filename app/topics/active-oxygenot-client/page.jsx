import ActiveOxygenotClientKeywordPage, { generateMetadata } from './active-oxygenot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOxygenotClientKeywordPage />;
}

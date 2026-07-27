import NoResetOxygenotClientKeywordPage, { generateMetadata } from './no-reset-oxygenot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOxygenotClientKeywordPage />;
}

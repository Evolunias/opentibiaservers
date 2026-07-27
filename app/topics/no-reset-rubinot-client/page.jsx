import NoResetRubinotClientKeywordPage, { generateMetadata } from './no-reset-rubinot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRubinotClientKeywordPage />;
}

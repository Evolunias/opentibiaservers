import NoResetRubinotWebsiteKeywordPage, { generateMetadata } from './no-reset-rubinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRubinotWebsiteKeywordPage />;
}

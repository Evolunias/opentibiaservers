import NoResetRubinotKeywordPage, { generateMetadata } from './no-reset-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRubinotKeywordPage />;
}

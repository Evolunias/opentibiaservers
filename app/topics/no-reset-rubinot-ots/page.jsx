import NoResetRubinotOtsKeywordPage, { generateMetadata } from './no-reset-rubinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRubinotOtsKeywordPage />;
}

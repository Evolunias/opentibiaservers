import NoResetRubinotOtKeywordPage, { generateMetadata } from './no-reset-rubinot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRubinotOtKeywordPage />;
}

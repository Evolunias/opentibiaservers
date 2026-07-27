import NoResetRubinotRegisterKeywordPage, { generateMetadata } from './no-reset-rubinot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRubinotRegisterKeywordPage />;
}

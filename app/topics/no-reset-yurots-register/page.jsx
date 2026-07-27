import NoResetYurotsRegisterKeywordPage, { generateMetadata } from './no-reset-yurots-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetYurotsRegisterKeywordPage />;
}

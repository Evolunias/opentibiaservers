import NoResetYurotsLoginKeywordPage, { generateMetadata } from './no-reset-yurots-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetYurotsLoginKeywordPage />;
}

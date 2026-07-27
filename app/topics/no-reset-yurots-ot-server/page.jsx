import NoResetYurotsOtServerKeywordPage, { generateMetadata } from './no-reset-yurots-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetYurotsOtServerKeywordPage />;
}

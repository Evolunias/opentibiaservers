import NoResetYurotsServerKeywordPage, { generateMetadata } from './no-reset-yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetYurotsServerKeywordPage />;
}

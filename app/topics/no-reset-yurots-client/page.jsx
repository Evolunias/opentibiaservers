import NoResetYurotsClientKeywordPage, { generateMetadata } from './no-reset-yurots-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetYurotsClientKeywordPage />;
}

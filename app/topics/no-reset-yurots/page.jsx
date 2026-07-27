import NoResetYurotsKeywordPage, { generateMetadata } from './no-reset-yurots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetYurotsKeywordPage />;
}

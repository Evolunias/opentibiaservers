import NoResetKasteriaServerKeywordPage, { generateMetadata } from './no-reset-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetKasteriaServerKeywordPage />;
}

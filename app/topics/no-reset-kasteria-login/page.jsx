import NoResetKasteriaLoginKeywordPage, { generateMetadata } from './no-reset-kasteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetKasteriaLoginKeywordPage />;
}

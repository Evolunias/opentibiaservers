import NoResetKasteriaOtsKeywordPage, { generateMetadata } from './no-reset-kasteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetKasteriaOtsKeywordPage />;
}

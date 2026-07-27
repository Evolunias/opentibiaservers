import NoResetKasteriaOtKeywordPage, { generateMetadata } from './no-reset-kasteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetKasteriaOtKeywordPage />;
}

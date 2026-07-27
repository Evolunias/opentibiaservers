import NoResetKasteriaOtServerKeywordPage, { generateMetadata } from './no-reset-kasteria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetKasteriaOtServerKeywordPage />;
}

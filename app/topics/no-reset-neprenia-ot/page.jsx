import NoResetNepreniaOtKeywordPage, { generateMetadata } from './no-reset-neprenia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNepreniaOtKeywordPage />;
}

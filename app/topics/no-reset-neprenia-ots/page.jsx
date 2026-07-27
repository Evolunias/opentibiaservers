import NoResetNepreniaOtsKeywordPage, { generateMetadata } from './no-reset-neprenia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNepreniaOtsKeywordPage />;
}

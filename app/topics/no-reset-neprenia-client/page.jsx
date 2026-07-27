import NoResetNepreniaClientKeywordPage, { generateMetadata } from './no-reset-neprenia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNepreniaClientKeywordPage />;
}

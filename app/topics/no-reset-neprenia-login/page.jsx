import NoResetNepreniaLoginKeywordPage, { generateMetadata } from './no-reset-neprenia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNepreniaLoginKeywordPage />;
}

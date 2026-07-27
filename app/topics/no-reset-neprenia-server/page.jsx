import NoResetNepreniaServerKeywordPage, { generateMetadata } from './no-reset-neprenia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNepreniaServerKeywordPage />;
}

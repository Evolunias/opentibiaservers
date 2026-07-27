import NoResetHarmoniaOtLoginKeywordPage, { generateMetadata } from './no-reset-harmonia-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetHarmoniaOtLoginKeywordPage />;
}

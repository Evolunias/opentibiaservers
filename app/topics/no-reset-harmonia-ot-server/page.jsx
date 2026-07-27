import NoResetHarmoniaOtServerKeywordPage, { generateMetadata } from './no-reset-harmonia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetHarmoniaOtServerKeywordPage />;
}

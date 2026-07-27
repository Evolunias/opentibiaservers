import NoResetHarmoniaOtClientKeywordPage, { generateMetadata } from './no-reset-harmonia-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetHarmoniaOtClientKeywordPage />;
}

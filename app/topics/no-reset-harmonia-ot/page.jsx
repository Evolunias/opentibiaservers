import NoResetHarmoniaOtKeywordPage, { generateMetadata } from './no-reset-harmonia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetHarmoniaOtKeywordPage />;
}

import NoResetHarmoniaOtTibiaKeywordPage, { generateMetadata } from './no-reset-harmonia-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetHarmoniaOtTibiaKeywordPage />;
}

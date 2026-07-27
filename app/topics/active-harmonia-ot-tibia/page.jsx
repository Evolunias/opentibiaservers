import ActiveHarmoniaOtTibiaKeywordPage, { generateMetadata } from './active-harmonia-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveHarmoniaOtTibiaKeywordPage />;
}

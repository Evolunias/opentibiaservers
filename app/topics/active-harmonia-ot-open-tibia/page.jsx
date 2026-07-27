import ActiveHarmoniaOtOpenTibiaKeywordPage, { generateMetadata } from './active-harmonia-ot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveHarmoniaOtOpenTibiaKeywordPage />;
}

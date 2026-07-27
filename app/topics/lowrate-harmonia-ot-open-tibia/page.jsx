import LowrateHarmoniaOtOpenTibiaKeywordPage, { generateMetadata } from './lowrate-harmonia-ot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateHarmoniaOtOpenTibiaKeywordPage />;
}

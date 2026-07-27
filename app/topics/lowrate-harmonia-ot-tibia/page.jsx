import LowrateHarmoniaOtTibiaKeywordPage, { generateMetadata } from './lowrate-harmonia-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateHarmoniaOtTibiaKeywordPage />;
}

import LowrateNoxiousotTibiaKeywordPage, { generateMetadata } from './lowrate-noxiousot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNoxiousotTibiaKeywordPage />;
}

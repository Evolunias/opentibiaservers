import HighrateNoxiousotOpenTibiaKeywordPage, { generateMetadata } from './highrate-noxiousot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNoxiousotOpenTibiaKeywordPage />;
}

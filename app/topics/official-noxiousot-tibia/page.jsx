import OfficialNoxiousotTibiaKeywordPage, { generateMetadata } from './official-noxiousot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNoxiousotTibiaKeywordPage />;
}

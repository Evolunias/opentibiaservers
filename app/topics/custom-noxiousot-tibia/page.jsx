import CustomNoxiousotTibiaKeywordPage, { generateMetadata } from './custom-noxiousot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNoxiousotTibiaKeywordPage />;
}

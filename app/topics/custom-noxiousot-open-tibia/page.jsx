import CustomNoxiousotOpenTibiaKeywordPage, { generateMetadata } from './custom-noxiousot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNoxiousotOpenTibiaKeywordPage />;
}

import CustomNoxiousotGuideKeywordPage, { generateMetadata } from './custom-noxiousot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNoxiousotGuideKeywordPage />;
}

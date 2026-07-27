import CustomNoxiousotOtsKeywordPage, { generateMetadata } from './custom-noxiousot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNoxiousotOtsKeywordPage />;
}

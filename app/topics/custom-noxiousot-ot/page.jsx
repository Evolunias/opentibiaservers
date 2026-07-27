import CustomNoxiousotOtKeywordPage, { generateMetadata } from './custom-noxiousot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNoxiousotOtKeywordPage />;
}

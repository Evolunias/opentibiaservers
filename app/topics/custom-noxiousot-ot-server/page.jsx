import CustomNoxiousotOtServerKeywordPage, { generateMetadata } from './custom-noxiousot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNoxiousotOtServerKeywordPage />;
}

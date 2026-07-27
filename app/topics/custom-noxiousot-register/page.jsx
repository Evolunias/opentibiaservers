import CustomNoxiousotRegisterKeywordPage, { generateMetadata } from './custom-noxiousot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNoxiousotRegisterKeywordPage />;
}

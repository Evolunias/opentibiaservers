import CustomNoxiousotLoginKeywordPage, { generateMetadata } from './custom-noxiousot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNoxiousotLoginKeywordPage />;
}

import CustomNoxiousotClientKeywordPage, { generateMetadata } from './custom-noxiousot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNoxiousotClientKeywordPage />;
}

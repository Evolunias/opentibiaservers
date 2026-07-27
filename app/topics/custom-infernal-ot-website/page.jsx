import CustomInfernalOtWebsiteKeywordPage, { generateMetadata } from './custom-infernal-ot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomInfernalOtWebsiteKeywordPage />;
}

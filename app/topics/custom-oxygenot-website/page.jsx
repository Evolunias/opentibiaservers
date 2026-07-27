import CustomOxygenotWebsiteKeywordPage, { generateMetadata } from './custom-oxygenot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOxygenotWebsiteKeywordPage />;
}

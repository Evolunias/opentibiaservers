import CustomAlasteraWebsiteKeywordPage, { generateMetadata } from './custom-alastera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAlasteraWebsiteKeywordPage />;
}

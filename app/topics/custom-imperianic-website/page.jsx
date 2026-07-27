import CustomImperianicWebsiteKeywordPage, { generateMetadata } from './custom-imperianic-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomImperianicWebsiteKeywordPage />;
}

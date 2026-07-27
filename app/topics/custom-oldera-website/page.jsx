import CustomOlderaWebsiteKeywordPage, { generateMetadata } from './custom-oldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOlderaWebsiteKeywordPage />;
}

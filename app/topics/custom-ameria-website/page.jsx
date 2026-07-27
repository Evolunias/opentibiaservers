import CustomAmeriaWebsiteKeywordPage, { generateMetadata } from './custom-ameria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAmeriaWebsiteKeywordPage />;
}

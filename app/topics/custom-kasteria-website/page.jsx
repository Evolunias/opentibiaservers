import CustomKasteriaWebsiteKeywordPage, { generateMetadata } from './custom-kasteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomKasteriaWebsiteKeywordPage />;
}

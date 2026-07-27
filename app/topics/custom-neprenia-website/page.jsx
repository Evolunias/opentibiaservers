import CustomNepreniaWebsiteKeywordPage, { generateMetadata } from './custom-neprenia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNepreniaWebsiteKeywordPage />;
}

import CustomTibiaraWebsiteKeywordPage, { generateMetadata } from './custom-tibiara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaraWebsiteKeywordPage />;
}

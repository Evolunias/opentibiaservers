import CustomTibijkaWebsiteKeywordPage, { generateMetadata } from './custom-tibijka-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibijkaWebsiteKeywordPage />;
}

import CustomUnlineWebsiteKeywordPage, { generateMetadata } from './custom-unline-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomUnlineWebsiteKeywordPage />;
}

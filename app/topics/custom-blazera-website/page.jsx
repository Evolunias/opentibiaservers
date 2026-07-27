import CustomBlazeraWebsiteKeywordPage, { generateMetadata } from './custom-blazera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomBlazeraWebsiteKeywordPage />;
}

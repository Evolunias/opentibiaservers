import CustomEvoleraWebsiteKeywordPage, { generateMetadata } from './custom-evolera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoleraWebsiteKeywordPage />;
}

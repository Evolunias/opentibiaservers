import CustomMidhemWebsiteKeywordPage, { generateMetadata } from './custom-midhem-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMidhemWebsiteKeywordPage />;
}

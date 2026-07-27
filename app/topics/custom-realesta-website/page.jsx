import CustomRealestaWebsiteKeywordPage, { generateMetadata } from './custom-realesta-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRealestaWebsiteKeywordPage />;
}

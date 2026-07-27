import CustomElderaWebsiteKeywordPage, { generateMetadata } from './custom-eldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomElderaWebsiteKeywordPage />;
}

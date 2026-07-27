import HighrateBlazeraWebsiteKeywordPage, { generateMetadata } from './highrate-blazera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateBlazeraWebsiteKeywordPage />;
}

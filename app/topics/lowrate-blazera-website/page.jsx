import LowrateBlazeraWebsiteKeywordPage, { generateMetadata } from './lowrate-blazera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateBlazeraWebsiteKeywordPage />;
}

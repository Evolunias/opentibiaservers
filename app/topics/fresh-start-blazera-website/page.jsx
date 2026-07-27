import FreshStartBlazeraWebsiteKeywordPage, { generateMetadata } from './fresh-start-blazera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartBlazeraWebsiteKeywordPage />;
}

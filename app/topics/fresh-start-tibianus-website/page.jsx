import FreshStartTibianusWebsiteKeywordPage, { generateMetadata } from './fresh-start-tibianus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibianusWebsiteKeywordPage />;
}

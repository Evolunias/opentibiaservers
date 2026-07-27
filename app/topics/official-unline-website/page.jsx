import OfficialUnlineWebsiteKeywordPage, { generateMetadata } from './official-unline-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialUnlineWebsiteKeywordPage />;
}

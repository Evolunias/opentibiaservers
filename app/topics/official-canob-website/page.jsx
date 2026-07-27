import OfficialCanobWebsiteKeywordPage, { generateMetadata } from './official-canob-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCanobWebsiteKeywordPage />;
}

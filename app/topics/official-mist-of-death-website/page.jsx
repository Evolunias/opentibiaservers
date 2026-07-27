import OfficialMistOfDeathWebsiteKeywordPage, { generateMetadata } from './official-mist-of-death-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMistOfDeathWebsiteKeywordPage />;
}

import OfficialEternalOdysseyWebsiteKeywordPage, { generateMetadata } from './official-eternal-odyssey-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEternalOdysseyWebsiteKeywordPage />;
}

import CurrentEternalOdysseyWebsiteKeywordPage, { generateMetadata } from './current-eternal-odyssey-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEternalOdysseyWebsiteKeywordPage />;
}

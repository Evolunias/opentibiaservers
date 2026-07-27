import OfficialEternalOdysseyGuideKeywordPage, { generateMetadata } from './official-eternal-odyssey-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEternalOdysseyGuideKeywordPage />;
}

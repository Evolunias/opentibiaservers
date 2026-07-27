import CurrentEternalOdysseyGuideKeywordPage, { generateMetadata } from './current-eternal-odyssey-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEternalOdysseyGuideKeywordPage />;
}

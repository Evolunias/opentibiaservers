import CurrentMadnessaliveGuideKeywordPage, { generateMetadata } from './current-madnessalive-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMadnessaliveGuideKeywordPage />;
}

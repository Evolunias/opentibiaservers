import OfficialMadnessaliveGuideKeywordPage, { generateMetadata } from './official-madnessalive-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMadnessaliveGuideKeywordPage />;
}

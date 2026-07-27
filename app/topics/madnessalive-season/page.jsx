import MadnessaliveSeasonKeywordPage, { generateMetadata } from './madnessalive-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveSeasonKeywordPage />;
}

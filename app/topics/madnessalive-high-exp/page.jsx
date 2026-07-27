import MadnessaliveHighExpKeywordPage, { generateMetadata } from './madnessalive-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveHighExpKeywordPage />;
}

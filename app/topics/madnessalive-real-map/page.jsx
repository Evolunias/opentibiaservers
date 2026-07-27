import MadnessaliveRealMapKeywordPage, { generateMetadata } from './madnessalive-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveRealMapKeywordPage />;
}

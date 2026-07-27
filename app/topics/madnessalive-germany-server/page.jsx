import MadnessaliveGermanyServerKeywordPage, { generateMetadata } from './madnessalive-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveGermanyServerKeywordPage />;
}

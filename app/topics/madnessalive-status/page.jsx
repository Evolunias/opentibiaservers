import MadnessaliveStatusKeywordPage, { generateMetadata } from './madnessalive-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveStatusKeywordPage />;
}

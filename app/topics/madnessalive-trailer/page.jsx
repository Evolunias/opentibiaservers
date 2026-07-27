import MadnessaliveTrailerKeywordPage, { generateMetadata } from './madnessalive-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveTrailerKeywordPage />;
}

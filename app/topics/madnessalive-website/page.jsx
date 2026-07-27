import MadnessaliveWebsiteKeywordPage, { generateMetadata } from './madnessalive-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveWebsiteKeywordPage />;
}

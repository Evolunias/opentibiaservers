import OfficialMadnessaliveKeywordPage, { generateMetadata } from './official-madnessalive';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMadnessaliveKeywordPage />;
}

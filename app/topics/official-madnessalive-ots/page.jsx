import OfficialMadnessaliveOtsKeywordPage, { generateMetadata } from './official-madnessalive-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMadnessaliveOtsKeywordPage />;
}

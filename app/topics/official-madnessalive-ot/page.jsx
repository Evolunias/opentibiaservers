import OfficialMadnessaliveOtKeywordPage, { generateMetadata } from './official-madnessalive-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMadnessaliveOtKeywordPage />;
}

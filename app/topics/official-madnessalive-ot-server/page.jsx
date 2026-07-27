import OfficialMadnessaliveOtServerKeywordPage, { generateMetadata } from './official-madnessalive-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMadnessaliveOtServerKeywordPage />;
}

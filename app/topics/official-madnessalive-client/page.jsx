import OfficialMadnessaliveClientKeywordPage, { generateMetadata } from './official-madnessalive-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMadnessaliveClientKeywordPage />;
}

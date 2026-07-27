import OfficialOtmadnessServerKeywordPage, { generateMetadata } from './official-otmadness-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOtmadnessServerKeywordPage />;
}

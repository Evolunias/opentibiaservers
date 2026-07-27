import OfficialOtmadnessOtServerKeywordPage, { generateMetadata } from './official-otmadness-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOtmadnessOtServerKeywordPage />;
}

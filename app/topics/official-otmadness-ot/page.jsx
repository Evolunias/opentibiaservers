import OfficialOtmadnessOtKeywordPage, { generateMetadata } from './official-otmadness-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOtmadnessOtKeywordPage />;
}

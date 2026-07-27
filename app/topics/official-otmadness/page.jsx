import OfficialOtmadnessKeywordPage, { generateMetadata } from './official-otmadness';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOtmadnessKeywordPage />;
}

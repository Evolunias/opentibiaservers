import TopOtmadnessOfficialKeywordPage, { generateMetadata } from './top-otmadness-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOtmadnessOfficialKeywordPage />;
}

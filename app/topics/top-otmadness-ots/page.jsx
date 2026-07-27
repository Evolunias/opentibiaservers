import TopOtmadnessOtsKeywordPage, { generateMetadata } from './top-otmadness-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOtmadnessOtsKeywordPage />;
}

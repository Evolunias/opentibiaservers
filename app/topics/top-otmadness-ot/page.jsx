import TopOtmadnessOtKeywordPage, { generateMetadata } from './top-otmadness-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOtmadnessOtKeywordPage />;
}

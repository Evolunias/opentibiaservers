import TopOtmadnessClientKeywordPage, { generateMetadata } from './top-otmadness-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOtmadnessClientKeywordPage />;
}

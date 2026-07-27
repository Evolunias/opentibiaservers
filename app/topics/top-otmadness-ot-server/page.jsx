import TopOtmadnessOtServerKeywordPage, { generateMetadata } from './top-otmadness-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOtmadnessOtServerKeywordPage />;
}

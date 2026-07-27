import TopOtmadnessLoginKeywordPage, { generateMetadata } from './top-otmadness-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOtmadnessLoginKeywordPage />;
}

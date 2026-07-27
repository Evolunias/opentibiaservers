import OtmadnessLoginKeywordPage, { generateMetadata } from './otmadness-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessLoginKeywordPage />;
}

import OtmadnessEuropeServerKeywordPage, { generateMetadata } from './otmadness-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessEuropeServerKeywordPage />;
}

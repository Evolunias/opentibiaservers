import OtmadnessGermanyServerKeywordPage, { generateMetadata } from './otmadness-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessGermanyServerKeywordPage />;
}

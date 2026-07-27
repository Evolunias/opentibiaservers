import CurrentOtmadnessClientKeywordPage, { generateMetadata } from './current-otmadness-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOtmadnessClientKeywordPage />;
}

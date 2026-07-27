import CurrentOtmadnessOtsKeywordPage, { generateMetadata } from './current-otmadness-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOtmadnessOtsKeywordPage />;
}

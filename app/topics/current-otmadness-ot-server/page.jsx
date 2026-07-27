import CurrentOtmadnessOtServerKeywordPage, { generateMetadata } from './current-otmadness-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOtmadnessOtServerKeywordPage />;
}

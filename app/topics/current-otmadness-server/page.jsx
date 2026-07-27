import CurrentOtmadnessServerKeywordPage, { generateMetadata } from './current-otmadness-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOtmadnessServerKeywordPage />;
}

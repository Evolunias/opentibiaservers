import CurrentOtmadnessLoginKeywordPage, { generateMetadata } from './current-otmadness-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOtmadnessLoginKeywordPage />;
}

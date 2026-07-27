import OtmadnessResetKeywordPage, { generateMetadata } from './otmadness-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessResetKeywordPage />;
}

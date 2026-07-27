import ActiveOtmadnessOtsKeywordPage, { generateMetadata } from './active-otmadness-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOtmadnessOtsKeywordPage />;
}

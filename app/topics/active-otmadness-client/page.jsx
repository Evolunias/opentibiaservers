import ActiveOtmadnessClientKeywordPage, { generateMetadata } from './active-otmadness-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOtmadnessClientKeywordPage />;
}

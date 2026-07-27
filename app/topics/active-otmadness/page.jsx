import ActiveOtmadnessKeywordPage, { generateMetadata } from './active-otmadness';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOtmadnessKeywordPage />;
}

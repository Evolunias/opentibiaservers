import ActiveOtmadnessServerKeywordPage, { generateMetadata } from './active-otmadness-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOtmadnessServerKeywordPage />;
}

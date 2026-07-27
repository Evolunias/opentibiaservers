import ActiveOtmadnessOtServerKeywordPage, { generateMetadata } from './active-otmadness-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOtmadnessOtServerKeywordPage />;
}

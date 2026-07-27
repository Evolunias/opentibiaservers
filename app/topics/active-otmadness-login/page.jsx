import ActiveOtmadnessLoginKeywordPage, { generateMetadata } from './active-otmadness-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOtmadnessLoginKeywordPage />;
}

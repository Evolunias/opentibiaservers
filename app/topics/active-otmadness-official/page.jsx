import ActiveOtmadnessOfficialKeywordPage, { generateMetadata } from './active-otmadness-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOtmadnessOfficialKeywordPage />;
}

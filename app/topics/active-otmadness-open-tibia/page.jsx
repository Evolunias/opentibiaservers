import ActiveOtmadnessOpenTibiaKeywordPage, { generateMetadata } from './active-otmadness-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOtmadnessOpenTibiaKeywordPage />;
}

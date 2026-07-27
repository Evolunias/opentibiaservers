import NewOtmadnessOpenTibiaKeywordPage, { generateMetadata } from './new-otmadness-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOtmadnessOpenTibiaKeywordPage />;
}

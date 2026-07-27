import OtmadnessEventsKeywordPage, { generateMetadata } from './otmadness-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessEventsKeywordPage />;
}

import MadnessaliveEventsKeywordPage, { generateMetadata } from './madnessalive-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveEventsKeywordPage />;
}

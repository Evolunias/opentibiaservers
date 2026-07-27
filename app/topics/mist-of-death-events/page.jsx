import MistOfDeathEventsKeywordPage, { generateMetadata } from './mist-of-death-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathEventsKeywordPage />;
}

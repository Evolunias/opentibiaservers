import EternalOdysseyEventsKeywordPage, { generateMetadata } from './eternal-odyssey-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyEventsKeywordPage />;
}

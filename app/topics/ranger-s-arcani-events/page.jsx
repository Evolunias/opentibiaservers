import RangerSArcaniEventsKeywordPage, { generateMetadata } from './ranger-s-arcani-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniEventsKeywordPage />;
}

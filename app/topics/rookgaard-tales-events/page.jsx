import RookgaardTalesEventsKeywordPage, { generateMetadata } from './rookgaard-tales-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesEventsKeywordPage />;
}

import KasteriaEventsKeywordPage, { generateMetadata } from './kasteria-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaEventsKeywordPage />;
}

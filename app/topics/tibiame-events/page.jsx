import TibiameEventsKeywordPage, { generateMetadata } from './tibiame-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameEventsKeywordPage />;
}

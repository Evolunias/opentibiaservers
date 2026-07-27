import TibiantisEventsKeywordPage, { generateMetadata } from './tibiantis-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisEventsKeywordPage />;
}

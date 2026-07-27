import AureraGlobalEventsKeywordPage, { generateMetadata } from './aurera-global-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalEventsKeywordPage />;
}

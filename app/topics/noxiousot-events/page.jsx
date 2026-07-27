import NoxiousotEventsKeywordPage, { generateMetadata } from './noxiousot-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotEventsKeywordPage />;
}

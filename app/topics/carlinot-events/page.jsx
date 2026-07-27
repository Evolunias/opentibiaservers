import CarlinotEventsKeywordPage, { generateMetadata } from './carlinot-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotEventsKeywordPage />;
}

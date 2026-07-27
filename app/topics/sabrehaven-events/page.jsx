import SabrehavenEventsKeywordPage, { generateMetadata } from './sabrehaven-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenEventsKeywordPage />;
}

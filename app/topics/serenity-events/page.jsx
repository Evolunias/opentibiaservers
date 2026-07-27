import SerenityEventsKeywordPage, { generateMetadata } from './serenity-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityEventsKeywordPage />;
}

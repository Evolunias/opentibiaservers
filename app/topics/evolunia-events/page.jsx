import EvoluniaEventsKeywordPage, { generateMetadata } from './evolunia-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaEventsKeywordPage />;
}

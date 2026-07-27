import RuthlessChaosEventsKeywordPage, { generateMetadata } from './ruthless-chaos-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosEventsKeywordPage />;
}

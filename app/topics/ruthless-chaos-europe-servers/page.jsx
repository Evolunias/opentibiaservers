import RuthlessChaosEuropeServersKeywordPage, { generateMetadata } from './ruthless-chaos-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosEuropeServersKeywordPage />;
}

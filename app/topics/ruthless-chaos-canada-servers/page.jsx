import RuthlessChaosCanadaServersKeywordPage, { generateMetadata } from './ruthless-chaos-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosCanadaServersKeywordPage />;
}

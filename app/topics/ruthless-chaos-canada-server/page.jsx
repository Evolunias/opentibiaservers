import RuthlessChaosCanadaServerKeywordPage, { generateMetadata } from './ruthless-chaos-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosCanadaServerKeywordPage />;
}

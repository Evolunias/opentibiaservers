import RuthlessChaosEuropeServerKeywordPage, { generateMetadata } from './ruthless-chaos-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosEuropeServerKeywordPage />;
}

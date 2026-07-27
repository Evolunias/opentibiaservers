import CurrentRuthlessChaosOtsKeywordPage, { generateMetadata } from './current-ruthless-chaos-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRuthlessChaosOtsKeywordPage />;
}

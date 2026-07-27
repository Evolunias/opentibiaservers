import ActiveRuthlessChaosOtsKeywordPage, { generateMetadata } from './active-ruthless-chaos-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRuthlessChaosOtsKeywordPage />;
}

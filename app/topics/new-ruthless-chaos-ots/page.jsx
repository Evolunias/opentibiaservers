import NewRuthlessChaosOtsKeywordPage, { generateMetadata } from './new-ruthless-chaos-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRuthlessChaosOtsKeywordPage />;
}

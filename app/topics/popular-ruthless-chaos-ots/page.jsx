import PopularRuthlessChaosOtsKeywordPage, { generateMetadata } from './popular-ruthless-chaos-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRuthlessChaosOtsKeywordPage />;
}

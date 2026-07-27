import CustomRuthlessChaosOtsKeywordPage, { generateMetadata } from './custom-ruthless-chaos-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRuthlessChaosOtsKeywordPage />;
}

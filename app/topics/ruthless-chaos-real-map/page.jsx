import RuthlessChaosRealMapKeywordPage, { generateMetadata } from './ruthless-chaos-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosRealMapKeywordPage />;
}

import RuthlessChaosMapKeywordPage, { generateMetadata } from './ruthless-chaos-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosMapKeywordPage />;
}

import RuthlessChaosOtKeywordPage, { generateMetadata } from './ruthless-chaos-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosOtKeywordPage />;
}

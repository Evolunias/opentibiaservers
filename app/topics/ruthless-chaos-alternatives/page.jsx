import RuthlessChaosAlternativesKeywordPage, { generateMetadata } from './ruthless-chaos-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosAlternativesKeywordPage />;
}

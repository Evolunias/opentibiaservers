import CurrentRuthlessChaosOtKeywordPage, { generateMetadata } from './current-ruthless-chaos-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRuthlessChaosOtKeywordPage />;
}

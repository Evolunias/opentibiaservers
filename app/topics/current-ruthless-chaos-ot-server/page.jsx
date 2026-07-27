import CurrentRuthlessChaosOtServerKeywordPage, { generateMetadata } from './current-ruthless-chaos-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRuthlessChaosOtServerKeywordPage />;
}

import CurrentRuthlessChaosClientKeywordPage, { generateMetadata } from './current-ruthless-chaos-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRuthlessChaosClientKeywordPage />;
}

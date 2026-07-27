import CurrentRuthlessChaosOpenTibiaKeywordPage, { generateMetadata } from './current-ruthless-chaos-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRuthlessChaosOpenTibiaKeywordPage />;
}

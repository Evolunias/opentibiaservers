import ActiveRuthlessChaosOpenTibiaKeywordPage, { generateMetadata } from './active-ruthless-chaos-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRuthlessChaosOpenTibiaKeywordPage />;
}

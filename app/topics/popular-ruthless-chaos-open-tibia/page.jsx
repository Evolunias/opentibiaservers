import PopularRuthlessChaosOpenTibiaKeywordPage, { generateMetadata } from './popular-ruthless-chaos-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRuthlessChaosOpenTibiaKeywordPage />;
}

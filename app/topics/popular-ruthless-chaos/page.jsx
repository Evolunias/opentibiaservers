import PopularRuthlessChaosKeywordPage, { generateMetadata } from './popular-ruthless-chaos';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRuthlessChaosKeywordPage />;
}

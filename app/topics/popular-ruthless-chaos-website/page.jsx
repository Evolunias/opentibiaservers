import PopularRuthlessChaosWebsiteKeywordPage, { generateMetadata } from './popular-ruthless-chaos-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRuthlessChaosWebsiteKeywordPage />;
}

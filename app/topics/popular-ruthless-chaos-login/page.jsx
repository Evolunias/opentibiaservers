import PopularRuthlessChaosLoginKeywordPage, { generateMetadata } from './popular-ruthless-chaos-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRuthlessChaosLoginKeywordPage />;
}

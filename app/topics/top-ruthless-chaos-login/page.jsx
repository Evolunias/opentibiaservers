import TopRuthlessChaosLoginKeywordPage, { generateMetadata } from './top-ruthless-chaos-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRuthlessChaosLoginKeywordPage />;
}

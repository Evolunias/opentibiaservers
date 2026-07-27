import TopRuthlessChaosServerKeywordPage, { generateMetadata } from './top-ruthless-chaos-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRuthlessChaosServerKeywordPage />;
}

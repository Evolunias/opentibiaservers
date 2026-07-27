import TopRuthlessChaosPrivateServerKeywordPage, { generateMetadata } from './top-ruthless-chaos-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRuthlessChaosPrivateServerKeywordPage />;
}

import NewSeasonRuthlessChaosServerKeywordPage, { generateMetadata } from './new-season-ruthless-chaos-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRuthlessChaosServerKeywordPage />;
}

import NewSeasonRuthlessChaosKeywordPage, { generateMetadata } from './new-season-ruthless-chaos';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRuthlessChaosKeywordPage />;
}

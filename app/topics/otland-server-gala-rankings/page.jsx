import OtlandServerGalaRankingsKeywordPage, { generateMetadata } from './otland-server-gala-rankings';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandServerGalaRankingsKeywordPage />;
}

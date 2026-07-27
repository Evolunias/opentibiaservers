import SeasonalArcaniarlServerKeywordPage, { generateMetadata } from './seasonal-arcaniarl-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalArcaniarlServerKeywordPage />;
}

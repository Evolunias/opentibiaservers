import DragonBallLegendUkServersKeywordPage, { generateMetadata } from './dragon-ball-legend-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendUkServersKeywordPage />;
}

import DragonBallSoulFighterPage, { generateMetadata } from './dragon-ball-soul-fighter';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallSoulFighterPage />;
}

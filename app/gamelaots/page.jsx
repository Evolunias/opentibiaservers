import GamelaotsPage, { generateMetadata } from './gamelaots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GamelaotsPage />;
}

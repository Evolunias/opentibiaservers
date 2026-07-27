import MazeotPage, { generateMetadata } from './mazeot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MazeotPage />;
}

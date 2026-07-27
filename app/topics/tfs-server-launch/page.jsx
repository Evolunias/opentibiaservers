import TfsServerLaunchKeywordPage, { generateMetadata } from './tfs-server-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TfsServerLaunchKeywordPage />;
}

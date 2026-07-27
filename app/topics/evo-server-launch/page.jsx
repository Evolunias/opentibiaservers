import EvoServerLaunchKeywordPage, { generateMetadata } from './evo-server-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerLaunchKeywordPage />;
}

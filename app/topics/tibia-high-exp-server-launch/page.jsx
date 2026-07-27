import TibiaHighExpServerLaunchKeywordPage, { generateMetadata } from './tibia-high-exp-server-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaHighExpServerLaunchKeywordPage />;
}

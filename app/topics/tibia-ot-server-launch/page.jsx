import TibiaOtServerLaunchKeywordPage, { generateMetadata } from './tibia-ot-server-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaOtServerLaunchKeywordPage />;
}

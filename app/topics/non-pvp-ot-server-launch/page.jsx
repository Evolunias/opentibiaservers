import NonPvpOtServerLaunchKeywordPage, { generateMetadata } from './non-pvp-ot-server-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpOtServerLaunchKeywordPage />;
}

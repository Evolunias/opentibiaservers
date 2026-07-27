import FunServerLaunchKeywordPage, { generateMetadata } from './fun-server-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FunServerLaunchKeywordPage />;
}

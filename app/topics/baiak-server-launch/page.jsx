import BaiakServerLaunchKeywordPage, { generateMetadata } from './baiak-server-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServerLaunchKeywordPage />;
}

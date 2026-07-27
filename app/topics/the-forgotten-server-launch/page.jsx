import TheForgottenServerLaunchKeywordPage, { generateMetadata } from './the-forgotten-server-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TheForgottenServerLaunchKeywordPage />;
}

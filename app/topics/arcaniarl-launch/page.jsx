import ArcaniarlLaunchKeywordPage, { generateMetadata } from './arcaniarl-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlLaunchKeywordPage />;
}

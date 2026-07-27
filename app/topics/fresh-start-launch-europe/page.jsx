import FreshStartLaunchEuropeKeywordPage, { generateMetadata } from './fresh-start-launch-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartLaunchEuropeKeywordPage />;
}

import FreshStartLaunchUkKeywordPage, { generateMetadata } from './fresh-start-launch-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartLaunchUkKeywordPage />;
}

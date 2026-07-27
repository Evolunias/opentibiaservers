import FreshStartLaunchPolandKeywordPage, { generateMetadata } from './fresh-start-launch-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartLaunchPolandKeywordPage />;
}

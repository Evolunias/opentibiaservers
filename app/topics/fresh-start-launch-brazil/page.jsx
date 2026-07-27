import FreshStartLaunchBrazilKeywordPage, { generateMetadata } from './fresh-start-launch-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartLaunchBrazilKeywordPage />;
}

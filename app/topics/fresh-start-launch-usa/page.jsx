import FreshStartLaunchUsaKeywordPage, { generateMetadata } from './fresh-start-launch-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartLaunchUsaKeywordPage />;
}

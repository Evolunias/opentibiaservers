import CanobLaunchKeywordPage, { generateMetadata } from './canob-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobLaunchKeywordPage />;
}

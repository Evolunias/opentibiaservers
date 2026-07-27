import CanobLauncherKeywordPage, { generateMetadata } from './canob-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobLauncherKeywordPage />;
}

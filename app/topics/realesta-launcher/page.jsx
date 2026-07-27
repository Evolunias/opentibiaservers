import RealestaLauncherKeywordPage, { generateMetadata } from './realesta-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaLauncherKeywordPage />;
}

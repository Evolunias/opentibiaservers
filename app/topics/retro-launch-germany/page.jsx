import RetroLaunchGermanyKeywordPage, { generateMetadata } from './retro-launch-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroLaunchGermanyKeywordPage />;
}

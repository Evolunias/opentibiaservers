import RetroLaunchEuropeKeywordPage, { generateMetadata } from './retro-launch-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroLaunchEuropeKeywordPage />;
}

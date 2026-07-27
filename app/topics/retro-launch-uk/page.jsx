import RetroLaunchUkKeywordPage, { generateMetadata } from './retro-launch-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroLaunchUkKeywordPage />;
}

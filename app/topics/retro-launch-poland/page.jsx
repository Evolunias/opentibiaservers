import RetroLaunchPolandKeywordPage, { generateMetadata } from './retro-launch-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroLaunchPolandKeywordPage />;
}

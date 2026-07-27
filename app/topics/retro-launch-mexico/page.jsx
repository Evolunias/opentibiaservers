import RetroLaunchMexicoKeywordPage, { generateMetadata } from './retro-launch-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroLaunchMexicoKeywordPage />;
}

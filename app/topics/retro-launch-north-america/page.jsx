import RetroLaunchNorthAmericaKeywordPage, { generateMetadata } from './retro-launch-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroLaunchNorthAmericaKeywordPage />;
}

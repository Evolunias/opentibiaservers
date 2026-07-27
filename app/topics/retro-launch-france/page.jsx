import RetroLaunchFranceKeywordPage, { generateMetadata } from './retro-launch-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroLaunchFranceKeywordPage />;
}

import RetroLaunchCanadaKeywordPage, { generateMetadata } from './retro-launch-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroLaunchCanadaKeywordPage />;
}

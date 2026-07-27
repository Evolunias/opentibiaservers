import RetroLaunchUsaKeywordPage, { generateMetadata } from './retro-launch-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroLaunchUsaKeywordPage />;
}

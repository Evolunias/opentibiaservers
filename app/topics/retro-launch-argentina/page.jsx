import RetroLaunchArgentinaKeywordPage, { generateMetadata } from './retro-launch-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroLaunchArgentinaKeywordPage />;
}

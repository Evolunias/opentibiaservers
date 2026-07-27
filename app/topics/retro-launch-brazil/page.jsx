import RetroLaunchBrazilKeywordPage, { generateMetadata } from './retro-launch-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroLaunchBrazilKeywordPage />;
}

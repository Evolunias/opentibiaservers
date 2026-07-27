import FreshStartArcaniarlTibiaKeywordPage, { generateMetadata } from './fresh-start-arcaniarl-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartArcaniarlTibiaKeywordPage />;
}

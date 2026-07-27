import HighrateArcaniarlTibiaKeywordPage, { generateMetadata } from './highrate-arcaniarl-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArcaniarlTibiaKeywordPage />;
}

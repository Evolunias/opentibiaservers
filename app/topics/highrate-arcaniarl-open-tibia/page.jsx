import HighrateArcaniarlOpenTibiaKeywordPage, { generateMetadata } from './highrate-arcaniarl-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArcaniarlOpenTibiaKeywordPage />;
}

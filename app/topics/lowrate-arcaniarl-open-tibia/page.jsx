import LowrateArcaniarlOpenTibiaKeywordPage, { generateMetadata } from './lowrate-arcaniarl-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArcaniarlOpenTibiaKeywordPage />;
}

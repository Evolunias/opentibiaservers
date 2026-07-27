import LowrateArcaniarlTibiaKeywordPage, { generateMetadata } from './lowrate-arcaniarl-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArcaniarlTibiaKeywordPage />;
}

import OfficialArcaniarlTibiaKeywordPage, { generateMetadata } from './official-arcaniarl-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArcaniarlTibiaKeywordPage />;
}

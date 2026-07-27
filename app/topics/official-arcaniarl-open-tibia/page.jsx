import OfficialArcaniarlOpenTibiaKeywordPage, { generateMetadata } from './official-arcaniarl-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArcaniarlOpenTibiaKeywordPage />;
}

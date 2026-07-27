import CurrentArcaniarlOpenTibiaKeywordPage, { generateMetadata } from './current-arcaniarl-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArcaniarlOpenTibiaKeywordPage />;
}

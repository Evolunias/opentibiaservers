import CurrentArcaniarlTibiaKeywordPage, { generateMetadata } from './current-arcaniarl-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArcaniarlTibiaKeywordPage />;
}

import ActiveArcaniarlOpenTibiaKeywordPage, { generateMetadata } from './active-arcaniarl-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArcaniarlOpenTibiaKeywordPage />;
}

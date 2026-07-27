import ActiveArcaniarlTibiaKeywordPage, { generateMetadata } from './active-arcaniarl-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArcaniarlTibiaKeywordPage />;
}

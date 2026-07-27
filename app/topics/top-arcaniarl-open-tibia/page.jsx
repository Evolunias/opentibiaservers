import TopArcaniarlOpenTibiaKeywordPage, { generateMetadata } from './top-arcaniarl-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArcaniarlOpenTibiaKeywordPage />;
}

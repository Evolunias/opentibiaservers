import TopArcaniarlTibiaKeywordPage, { generateMetadata } from './top-arcaniarl-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArcaniarlTibiaKeywordPage />;
}

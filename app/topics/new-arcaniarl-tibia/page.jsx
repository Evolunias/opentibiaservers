import NewArcaniarlTibiaKeywordPage, { generateMetadata } from './new-arcaniarl-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewArcaniarlTibiaKeywordPage />;
}

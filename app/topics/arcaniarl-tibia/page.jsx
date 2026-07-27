import ArcaniarlTibiaKeywordPage, { generateMetadata } from './arcaniarl-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlTibiaKeywordPage />;
}

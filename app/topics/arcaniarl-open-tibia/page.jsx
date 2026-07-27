import ArcaniarlOpenTibiaKeywordPage, { generateMetadata } from './arcaniarl-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlOpenTibiaKeywordPage />;
}

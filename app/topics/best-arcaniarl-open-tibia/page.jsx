import BestArcaniarlOpenTibiaKeywordPage, { generateMetadata } from './best-arcaniarl-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArcaniarlOpenTibiaKeywordPage />;
}

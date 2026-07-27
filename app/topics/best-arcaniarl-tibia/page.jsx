import BestArcaniarlTibiaKeywordPage, { generateMetadata } from './best-arcaniarl-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArcaniarlTibiaKeywordPage />;
}

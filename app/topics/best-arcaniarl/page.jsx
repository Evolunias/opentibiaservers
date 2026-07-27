import BestArcaniarlKeywordPage, { generateMetadata } from './best-arcaniarl';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArcaniarlKeywordPage />;
}

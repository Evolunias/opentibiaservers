import BestArcaniarlWebsiteKeywordPage, { generateMetadata } from './best-arcaniarl-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArcaniarlWebsiteKeywordPage />;
}

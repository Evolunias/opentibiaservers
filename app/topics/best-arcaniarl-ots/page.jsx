import BestArcaniarlOtsKeywordPage, { generateMetadata } from './best-arcaniarl-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArcaniarlOtsKeywordPage />;
}

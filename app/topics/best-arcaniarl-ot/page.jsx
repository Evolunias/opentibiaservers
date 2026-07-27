import BestArcaniarlOtKeywordPage, { generateMetadata } from './best-arcaniarl-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArcaniarlOtKeywordPage />;
}

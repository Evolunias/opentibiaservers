import BestArcaniarlClientKeywordPage, { generateMetadata } from './best-arcaniarl-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArcaniarlClientKeywordPage />;
}

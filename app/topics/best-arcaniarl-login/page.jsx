import BestArcaniarlLoginKeywordPage, { generateMetadata } from './best-arcaniarl-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArcaniarlLoginKeywordPage />;
}

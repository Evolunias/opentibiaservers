import BestArcaniarlOtServerKeywordPage, { generateMetadata } from './best-arcaniarl-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArcaniarlOtServerKeywordPage />;
}

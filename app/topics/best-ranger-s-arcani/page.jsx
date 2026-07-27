import BestRangerSArcaniKeywordPage, { generateMetadata } from './best-ranger-s-arcani';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRangerSArcaniKeywordPage />;
}

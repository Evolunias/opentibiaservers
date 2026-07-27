import BestRangerSArcaniOtServerKeywordPage, { generateMetadata } from './best-ranger-s-arcani-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRangerSArcaniOtServerKeywordPage />;
}

import RangerSArcaniEuropeServerKeywordPage, { generateMetadata } from './ranger-s-arcani-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniEuropeServerKeywordPage />;
}

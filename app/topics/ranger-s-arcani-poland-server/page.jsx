import RangerSArcaniPolandServerKeywordPage, { generateMetadata } from './ranger-s-arcani-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniPolandServerKeywordPage />;
}

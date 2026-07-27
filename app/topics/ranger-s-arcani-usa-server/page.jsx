import RangerSArcaniUsaServerKeywordPage, { generateMetadata } from './ranger-s-arcani-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniUsaServerKeywordPage />;
}

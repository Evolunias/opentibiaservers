import RangerSArcaniGermanyServerKeywordPage, { generateMetadata } from './ranger-s-arcani-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniGermanyServerKeywordPage />;
}

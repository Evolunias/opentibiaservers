import RangerSArcaniPvpKeywordPage, { generateMetadata } from './ranger-s-arcani-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniPvpKeywordPage />;
}

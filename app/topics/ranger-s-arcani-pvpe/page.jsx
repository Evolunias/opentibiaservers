import RangerSArcaniPvpeKeywordPage, { generateMetadata } from './ranger-s-arcani-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniPvpeKeywordPage />;
}

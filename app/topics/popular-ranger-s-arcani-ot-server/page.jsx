import PopularRangerSArcaniOtServerKeywordPage, { generateMetadata } from './popular-ranger-s-arcani-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRangerSArcaniOtServerKeywordPage />;
}

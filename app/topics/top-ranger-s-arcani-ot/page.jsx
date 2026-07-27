import TopRangerSArcaniOtKeywordPage, { generateMetadata } from './top-ranger-s-arcani-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRangerSArcaniOtKeywordPage />;
}

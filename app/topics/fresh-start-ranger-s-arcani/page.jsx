import FreshStartRangerSArcaniKeywordPage, { generateMetadata } from './fresh-start-ranger-s-arcani';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRangerSArcaniKeywordPage />;
}

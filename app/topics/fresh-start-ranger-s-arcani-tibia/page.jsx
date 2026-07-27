import FreshStartRangerSArcaniTibiaKeywordPage, { generateMetadata } from './fresh-start-ranger-s-arcani-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRangerSArcaniTibiaKeywordPage />;
}

import NewRangerSArcaniTibiaKeywordPage, { generateMetadata } from './new-ranger-s-arcani-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRangerSArcaniTibiaKeywordPage />;
}

import OfficialRangerSArcaniTibiaKeywordPage, { generateMetadata } from './official-ranger-s-arcani-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRangerSArcaniTibiaKeywordPage />;
}

import RangerSArcaniTibiaKeywordPage, { generateMetadata } from './ranger-s-arcani-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniTibiaKeywordPage />;
}

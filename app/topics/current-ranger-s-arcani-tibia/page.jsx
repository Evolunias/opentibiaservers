import CurrentRangerSArcaniTibiaKeywordPage, { generateMetadata } from './current-ranger-s-arcani-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRangerSArcaniTibiaKeywordPage />;
}

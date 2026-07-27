import ActiveRangerSArcaniOpenTibiaKeywordPage, { generateMetadata } from './active-ranger-s-arcani-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRangerSArcaniOpenTibiaKeywordPage />;
}

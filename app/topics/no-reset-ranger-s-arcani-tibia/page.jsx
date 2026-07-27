import NoResetRangerSArcaniTibiaKeywordPage, { generateMetadata } from './no-reset-ranger-s-arcani-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRangerSArcaniTibiaKeywordPage />;
}

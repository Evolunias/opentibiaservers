import BestRangerSArcaniOpenTibiaKeywordPage, { generateMetadata } from './best-ranger-s-arcani-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRangerSArcaniOpenTibiaKeywordPage />;
}

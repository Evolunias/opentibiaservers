import RangerSArcaniLaunchKeywordPage, { generateMetadata } from './ranger-s-arcani-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniLaunchKeywordPage />;
}

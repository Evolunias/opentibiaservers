import RangerSArcaniLauncherKeywordPage, { generateMetadata } from './ranger-s-arcani-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniLauncherKeywordPage />;
}

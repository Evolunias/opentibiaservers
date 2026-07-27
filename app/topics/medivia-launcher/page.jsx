import MediviaLauncherKeywordPage, { generateMetadata } from './medivia-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaLauncherKeywordPage />;
}

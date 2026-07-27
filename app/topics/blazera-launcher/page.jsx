import BlazeraLauncherKeywordPage, { generateMetadata } from './blazera-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraLauncherKeywordPage />;
}

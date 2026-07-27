import BlazeraLaunchKeywordPage, { generateMetadata } from './blazera-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraLaunchKeywordPage />;
}

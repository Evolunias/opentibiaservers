import MediviaLaunchKeywordPage, { generateMetadata } from './medivia-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaLaunchKeywordPage />;
}

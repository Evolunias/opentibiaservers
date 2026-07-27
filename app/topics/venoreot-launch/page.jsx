import VenoreotLaunchKeywordPage, { generateMetadata } from './venoreot-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotLaunchKeywordPage />;
}

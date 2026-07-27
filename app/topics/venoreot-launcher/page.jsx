import VenoreotLauncherKeywordPage, { generateMetadata } from './venoreot-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotLauncherKeywordPage />;
}

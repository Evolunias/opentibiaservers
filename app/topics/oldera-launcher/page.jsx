import OlderaLauncherKeywordPage, { generateMetadata } from './oldera-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaLauncherKeywordPage />;
}

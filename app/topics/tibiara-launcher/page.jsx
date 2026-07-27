import TibiaraLauncherKeywordPage, { generateMetadata } from './tibiara-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraLauncherKeywordPage />;
}

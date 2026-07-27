import TibiaretroLauncherKeywordPage, { generateMetadata } from './tibiaretro-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroLauncherKeywordPage />;
}

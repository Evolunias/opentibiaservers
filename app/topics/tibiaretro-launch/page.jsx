import TibiaretroLaunchKeywordPage, { generateMetadata } from './tibiaretro-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroLaunchKeywordPage />;
}

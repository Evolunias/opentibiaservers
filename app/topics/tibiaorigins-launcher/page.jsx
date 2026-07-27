import TibiaoriginsLauncherKeywordPage, { generateMetadata } from './tibiaorigins-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsLauncherKeywordPage />;
}

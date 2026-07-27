import TibiascapeLauncherKeywordPage, { generateMetadata } from './tibiascape-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeLauncherKeywordPage />;
}

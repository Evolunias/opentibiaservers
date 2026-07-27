import OxygenotLauncherKeywordPage, { generateMetadata } from './oxygenot-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotLauncherKeywordPage />;
}

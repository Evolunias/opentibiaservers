import TibianusLauncherKeywordPage, { generateMetadata } from './tibianus-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusLauncherKeywordPage />;
}

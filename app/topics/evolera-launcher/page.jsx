import EvoleraLauncherKeywordPage, { generateMetadata } from './evolera-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraLauncherKeywordPage />;
}

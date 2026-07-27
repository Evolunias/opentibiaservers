import AureraGlobalLauncherKeywordPage, { generateMetadata } from './aurera-global-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalLauncherKeywordPage />;
}

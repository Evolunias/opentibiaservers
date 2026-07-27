import NoxiousotLauncherKeywordPage, { generateMetadata } from './noxiousot-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotLauncherKeywordPage />;
}

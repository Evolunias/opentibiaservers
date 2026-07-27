import ArchlightLauncherKeywordPage, { generateMetadata } from './archlight-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightLauncherKeywordPage />;
}

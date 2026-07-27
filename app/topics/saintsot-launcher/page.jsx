import SaintsotLauncherKeywordPage, { generateMetadata } from './saintsot-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotLauncherKeywordPage />;
}

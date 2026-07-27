import SaintsotLaunchKeywordPage, { generateMetadata } from './saintsot-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotLaunchKeywordPage />;
}

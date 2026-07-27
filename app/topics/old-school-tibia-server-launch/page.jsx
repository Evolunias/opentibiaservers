import OldSchoolTibiaServerLaunchKeywordPage, { generateMetadata } from './old-school-tibia-server-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaServerLaunchKeywordPage />;
}

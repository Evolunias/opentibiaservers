import OpenTibiaServerListOldSchoolKeywordPage, { generateMetadata } from './open-tibia-server-list-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServerListOldSchoolKeywordPage />;
}

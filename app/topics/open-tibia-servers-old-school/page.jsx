import OpenTibiaServersOldSchoolKeywordPage, { generateMetadata } from './open-tibia-servers-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersOldSchoolKeywordPage />;
}

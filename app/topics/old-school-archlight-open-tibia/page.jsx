import OldSchoolArchlightOpenTibiaKeywordPage, { generateMetadata } from './old-school-archlight-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArchlightOpenTibiaKeywordPage />;
}

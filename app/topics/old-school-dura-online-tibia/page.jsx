import OldSchoolDuraOnlineTibiaKeywordPage, { generateMetadata } from './old-school-dura-online-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDuraOnlineTibiaKeywordPage />;
}

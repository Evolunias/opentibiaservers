import OldSchoolTrashformersOpenTibiaKeywordPage, { generateMetadata } from './old-school-trashformers-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTrashformersOpenTibiaKeywordPage />;
}

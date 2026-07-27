import OldSchoolTrashformersTibiaKeywordPage, { generateMetadata } from './old-school-trashformers-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTrashformersTibiaKeywordPage />;
}

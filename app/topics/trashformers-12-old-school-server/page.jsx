import Trashformers12OldSchoolServerKeywordPage, { generateMetadata } from './trashformers-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers12OldSchoolServerKeywordPage />;
}

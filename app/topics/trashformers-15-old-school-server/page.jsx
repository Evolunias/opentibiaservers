import Trashformers15OldSchoolServerKeywordPage, { generateMetadata } from './trashformers-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers15OldSchoolServerKeywordPage />;
}

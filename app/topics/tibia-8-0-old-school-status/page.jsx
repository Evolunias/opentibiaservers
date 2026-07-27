import Tibia80OldSchoolStatusKeywordPage, { generateMetadata } from './tibia-8-0-old-school-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80OldSchoolStatusKeywordPage />;
}

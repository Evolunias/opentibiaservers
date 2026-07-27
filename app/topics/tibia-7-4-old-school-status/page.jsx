import Tibia74OldSchoolStatusKeywordPage, { generateMetadata } from './tibia-7-4-old-school-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74OldSchoolStatusKeywordPage />;
}

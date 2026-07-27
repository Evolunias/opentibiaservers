import OldSchoolYurotsTibiaKeywordPage, { generateMetadata } from './old-school-yurots-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolYurotsTibiaKeywordPage />;
}

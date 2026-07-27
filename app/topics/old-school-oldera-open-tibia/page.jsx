import OldSchoolOlderaOpenTibiaKeywordPage, { generateMetadata } from './old-school-oldera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOlderaOpenTibiaKeywordPage />;
}

import OldSchoolKasteriaKeywordPage, { generateMetadata } from './old-school-kasteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolKasteriaKeywordPage />;
}

import OldSchoolOlderaOfficialKeywordPage, { generateMetadata } from './old-school-oldera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOlderaOfficialKeywordPage />;
}

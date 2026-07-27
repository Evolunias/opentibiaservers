import OldSchoolServersUkKeywordPage, { generateMetadata } from './old-school-servers-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolServersUkKeywordPage />;
}

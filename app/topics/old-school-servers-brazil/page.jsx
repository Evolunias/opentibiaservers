import OldSchoolServersBrazilKeywordPage, { generateMetadata } from './old-school-servers-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolServersBrazilKeywordPage />;
}

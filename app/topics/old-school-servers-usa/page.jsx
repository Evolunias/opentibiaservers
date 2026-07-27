import OldSchoolServersUsaKeywordPage, { generateMetadata } from './old-school-servers-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolServersUsaKeywordPage />;
}

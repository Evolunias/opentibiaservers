import OldSchoolServerArgentinaKeywordPage, { generateMetadata } from './old-school-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolServerArgentinaKeywordPage />;
}

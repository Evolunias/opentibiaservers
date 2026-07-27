import OldSchoolArchlightKeywordPage, { generateMetadata } from './old-school-archlight';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArchlightKeywordPage />;
}

import OldSchoolOtServerBrazilKeywordPage, { generateMetadata } from './old-school-ot-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOtServerBrazilKeywordPage />;
}

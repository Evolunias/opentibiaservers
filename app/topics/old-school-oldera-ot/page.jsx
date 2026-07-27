import OldSchoolOlderaOtKeywordPage, { generateMetadata } from './old-school-oldera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOlderaOtKeywordPage />;
}

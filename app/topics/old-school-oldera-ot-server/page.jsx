import OldSchoolOlderaOtServerKeywordPage, { generateMetadata } from './old-school-oldera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOlderaOtServerKeywordPage />;
}

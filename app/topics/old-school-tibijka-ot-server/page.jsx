import OldSchoolTibijkaOtServerKeywordPage, { generateMetadata } from './old-school-tibijka-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibijkaOtServerKeywordPage />;
}

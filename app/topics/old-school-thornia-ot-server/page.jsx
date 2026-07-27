import OldSchoolThorniaOtServerKeywordPage, { generateMetadata } from './old-school-thornia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThorniaOtServerKeywordPage />;
}

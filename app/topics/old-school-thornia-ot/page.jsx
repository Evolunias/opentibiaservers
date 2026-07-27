import OldSchoolThorniaOtKeywordPage, { generateMetadata } from './old-school-thornia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThorniaOtKeywordPage />;
}

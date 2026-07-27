import OldSchoolThorniaOtsKeywordPage, { generateMetadata } from './old-school-thornia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThorniaOtsKeywordPage />;
}

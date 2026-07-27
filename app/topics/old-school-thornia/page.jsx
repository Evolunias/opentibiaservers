import OldSchoolThorniaKeywordPage, { generateMetadata } from './old-school-thornia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThorniaKeywordPage />;
}

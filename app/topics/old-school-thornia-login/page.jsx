import OldSchoolThorniaLoginKeywordPage, { generateMetadata } from './old-school-thornia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThorniaLoginKeywordPage />;
}

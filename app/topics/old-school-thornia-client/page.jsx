import OldSchoolThorniaClientKeywordPage, { generateMetadata } from './old-school-thornia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThorniaClientKeywordPage />;
}

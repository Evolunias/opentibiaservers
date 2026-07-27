import OldSchoolThorniaServerKeywordPage, { generateMetadata } from './old-school-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThorniaServerKeywordPage />;
}

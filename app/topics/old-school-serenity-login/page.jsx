import OldSchoolSerenityLoginKeywordPage, { generateMetadata } from './old-school-serenity-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSerenityLoginKeywordPage />;
}

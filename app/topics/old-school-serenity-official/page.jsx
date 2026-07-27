import OldSchoolSerenityOfficialKeywordPage, { generateMetadata } from './old-school-serenity-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSerenityOfficialKeywordPage />;
}

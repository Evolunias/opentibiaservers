import OldSchoolSerenityClientKeywordPage, { generateMetadata } from './old-school-serenity-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSerenityClientKeywordPage />;
}

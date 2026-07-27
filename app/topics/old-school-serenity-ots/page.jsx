import OldSchoolSerenityOtsKeywordPage, { generateMetadata } from './old-school-serenity-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSerenityOtsKeywordPage />;
}

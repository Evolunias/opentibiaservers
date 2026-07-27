import OldSchoolSerenityOtKeywordPage, { generateMetadata } from './old-school-serenity-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSerenityOtKeywordPage />;
}

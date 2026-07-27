import OldSchoolSerenityKeywordPage, { generateMetadata } from './old-school-serenity';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSerenityKeywordPage />;
}

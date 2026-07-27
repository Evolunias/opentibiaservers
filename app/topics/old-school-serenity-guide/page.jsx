import OldSchoolSerenityGuideKeywordPage, { generateMetadata } from './old-school-serenity-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSerenityGuideKeywordPage />;
}

import OldSchoolYurotsGuideKeywordPage, { generateMetadata } from './old-school-yurots-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolYurotsGuideKeywordPage />;
}

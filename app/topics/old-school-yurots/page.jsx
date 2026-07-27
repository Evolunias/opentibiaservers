import OldSchoolYurotsKeywordPage, { generateMetadata } from './old-school-yurots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolYurotsKeywordPage />;
}

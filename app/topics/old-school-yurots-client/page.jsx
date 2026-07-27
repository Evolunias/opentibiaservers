import OldSchoolYurotsClientKeywordPage, { generateMetadata } from './old-school-yurots-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolYurotsClientKeywordPage />;
}

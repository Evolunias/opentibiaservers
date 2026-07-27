import OldSchoolYurotsLoginKeywordPage, { generateMetadata } from './old-school-yurots-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolYurotsLoginKeywordPage />;
}

import OldSchoolYurotsServerKeywordPage, { generateMetadata } from './old-school-yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolYurotsServerKeywordPage />;
}

import OldSchoolYurotsOtKeywordPage, { generateMetadata } from './old-school-yurots-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolYurotsOtKeywordPage />;
}

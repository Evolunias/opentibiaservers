import OldSchoolYurotsOtServerKeywordPage, { generateMetadata } from './old-school-yurots-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolYurotsOtServerKeywordPage />;
}

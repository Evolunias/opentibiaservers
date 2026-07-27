import OldSchoolCoxaotOtsKeywordPage, { generateMetadata } from './old-school-coxaot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCoxaotOtsKeywordPage />;
}

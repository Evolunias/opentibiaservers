import OldSchoolCoxaotOtServerKeywordPage, { generateMetadata } from './old-school-coxaot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCoxaotOtServerKeywordPage />;
}

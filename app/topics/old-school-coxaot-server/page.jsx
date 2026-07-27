import OldSchoolCoxaotServerKeywordPage, { generateMetadata } from './old-school-coxaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCoxaotServerKeywordPage />;
}

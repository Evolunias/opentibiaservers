import OldSchoolCoxaotLoginKeywordPage, { generateMetadata } from './old-school-coxaot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCoxaotLoginKeywordPage />;
}

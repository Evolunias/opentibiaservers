import OldSchoolCoxaotKeywordPage, { generateMetadata } from './old-school-coxaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCoxaotKeywordPage />;
}

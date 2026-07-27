import OldSchoolCoxaotClientKeywordPage, { generateMetadata } from './old-school-coxaot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCoxaotClientKeywordPage />;
}

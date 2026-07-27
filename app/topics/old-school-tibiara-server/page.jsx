import OldSchoolTibiaraServerKeywordPage, { generateMetadata } from './old-school-tibiara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaraServerKeywordPage />;
}

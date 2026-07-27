import OldSchoolTibiascapeCreateAccountKeywordPage, { generateMetadata } from './old-school-tibiascape-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiascapeCreateAccountKeywordPage />;
}

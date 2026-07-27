import OldSchoolTibiascapeLoginKeywordPage, { generateMetadata } from './old-school-tibiascape-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiascapeLoginKeywordPage />;
}

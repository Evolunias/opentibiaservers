import OldSchoolTibiascapeKeywordPage, { generateMetadata } from './old-school-tibiascape';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiascapeKeywordPage />;
}

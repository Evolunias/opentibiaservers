import OldSchoolTibiascapeClientKeywordPage, { generateMetadata } from './old-school-tibiascape-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiascapeClientKeywordPage />;
}

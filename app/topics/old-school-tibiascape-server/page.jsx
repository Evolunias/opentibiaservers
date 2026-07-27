import OldSchoolTibiascapeServerKeywordPage, { generateMetadata } from './old-school-tibiascape-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiascapeServerKeywordPage />;
}

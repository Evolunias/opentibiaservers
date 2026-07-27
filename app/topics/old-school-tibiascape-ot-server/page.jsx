import OldSchoolTibiascapeOtServerKeywordPage, { generateMetadata } from './old-school-tibiascape-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiascapeOtServerKeywordPage />;
}

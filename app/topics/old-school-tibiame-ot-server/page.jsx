import OldSchoolTibiameOtServerKeywordPage, { generateMetadata } from './old-school-tibiame-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiameOtServerKeywordPage />;
}

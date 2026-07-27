import OldSchoolTibiameRegisterKeywordPage, { generateMetadata } from './old-school-tibiame-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiameRegisterKeywordPage />;
}

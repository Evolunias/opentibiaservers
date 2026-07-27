import OldSchoolOtServerFranceKeywordPage, { generateMetadata } from './old-school-ot-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOtServerFranceKeywordPage />;
}

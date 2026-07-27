import OldSchoolElderaOfficialKeywordPage, { generateMetadata } from './old-school-eldera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolElderaOfficialKeywordPage />;
}

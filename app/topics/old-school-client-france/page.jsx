import OldSchoolClientFranceKeywordPage, { generateMetadata } from './old-school-client-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClientFranceKeywordPage />;
}

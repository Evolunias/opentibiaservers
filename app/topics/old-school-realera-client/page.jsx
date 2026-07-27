import OldSchoolRealeraClientKeywordPage, { generateMetadata } from './old-school-realera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealeraClientKeywordPage />;
}

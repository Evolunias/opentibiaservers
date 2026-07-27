import OldSchoolRealeraKeywordPage, { generateMetadata } from './old-school-realera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealeraKeywordPage />;
}

import OldSchoolNostaltherClientKeywordPage, { generateMetadata } from './old-school-nostalther-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNostaltherClientKeywordPage />;
}

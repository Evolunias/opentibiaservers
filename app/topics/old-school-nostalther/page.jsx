import OldSchoolNostaltherKeywordPage, { generateMetadata } from './old-school-nostalther';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNostaltherKeywordPage />;
}

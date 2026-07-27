import OldSchoolNostaltherOtsKeywordPage, { generateMetadata } from './old-school-nostalther-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNostaltherOtsKeywordPage />;
}

import OldSchoolNostaltherOtKeywordPage, { generateMetadata } from './old-school-nostalther-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNostaltherOtKeywordPage />;
}

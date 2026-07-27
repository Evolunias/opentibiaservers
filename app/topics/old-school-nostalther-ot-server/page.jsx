import OldSchoolNostaltherOtServerKeywordPage, { generateMetadata } from './old-school-nostalther-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNostaltherOtServerKeywordPage />;
}

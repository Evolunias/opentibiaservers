import OldSchoolNepreniaServerKeywordPage, { generateMetadata } from './old-school-neprenia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNepreniaServerKeywordPage />;
}

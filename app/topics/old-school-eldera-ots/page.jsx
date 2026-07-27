import OldSchoolElderaOtsKeywordPage, { generateMetadata } from './old-school-eldera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolElderaOtsKeywordPage />;
}

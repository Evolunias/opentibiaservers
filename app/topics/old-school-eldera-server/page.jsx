import OldSchoolElderaServerKeywordPage, { generateMetadata } from './old-school-eldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolElderaServerKeywordPage />;
}

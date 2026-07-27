import OldSchoolUnlineServerKeywordPage, { generateMetadata } from './old-school-unline-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolUnlineServerKeywordPage />;
}

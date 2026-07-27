import OldSchoolKasteriaServerKeywordPage, { generateMetadata } from './old-school-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolKasteriaServerKeywordPage />;
}

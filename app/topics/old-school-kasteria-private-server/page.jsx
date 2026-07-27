import OldSchoolKasteriaPrivateServerKeywordPage, { generateMetadata } from './old-school-kasteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolKasteriaPrivateServerKeywordPage />;
}

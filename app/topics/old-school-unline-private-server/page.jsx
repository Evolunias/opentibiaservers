import OldSchoolUnlinePrivateServerKeywordPage, { generateMetadata } from './old-school-unline-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolUnlinePrivateServerKeywordPage />;
}

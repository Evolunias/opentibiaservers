import OldSchoolMidhemPrivateServerKeywordPage, { generateMetadata } from './old-school-midhem-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMidhemPrivateServerKeywordPage />;
}

import OldSchoolLumineraPrivateServerKeywordPage, { generateMetadata } from './old-school-luminera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLumineraPrivateServerKeywordPage />;
}

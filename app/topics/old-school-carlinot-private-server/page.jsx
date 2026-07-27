import OldSchoolCarlinotPrivateServerKeywordPage, { generateMetadata } from './old-school-carlinot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCarlinotPrivateServerKeywordPage />;
}

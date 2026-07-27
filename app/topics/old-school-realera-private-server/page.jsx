import OldSchoolRealeraPrivateServerKeywordPage, { generateMetadata } from './old-school-realera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealeraPrivateServerKeywordPage />;
}

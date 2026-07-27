import OldSchoolBlazeraPrivateServerKeywordPage, { generateMetadata } from './old-school-blazera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBlazeraPrivateServerKeywordPage />;
}

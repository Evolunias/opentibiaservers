import OldSchoolSaintsotPrivateServerKeywordPage, { generateMetadata } from './old-school-saintsot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSaintsotPrivateServerKeywordPage />;
}

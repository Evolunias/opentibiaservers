import OldSchoolVenoreotPrivateServerKeywordPage, { generateMetadata } from './old-school-venoreot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolVenoreotPrivateServerKeywordPage />;
}

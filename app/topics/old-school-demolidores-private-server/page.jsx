import OldSchoolDemolidoresPrivateServerKeywordPage, { generateMetadata } from './old-school-demolidores-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDemolidoresPrivateServerKeywordPage />;
}

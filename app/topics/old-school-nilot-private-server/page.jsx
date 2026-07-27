import OldSchoolNilotPrivateServerKeywordPage, { generateMetadata } from './old-school-nilot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNilotPrivateServerKeywordPage />;
}

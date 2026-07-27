import OldSchoolEvoluniaPrivateServerKeywordPage, { generateMetadata } from './old-school-evolunia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoluniaPrivateServerKeywordPage />;
}

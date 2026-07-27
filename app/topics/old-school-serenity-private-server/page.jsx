import OldSchoolSerenityPrivateServerKeywordPage, { generateMetadata } from './old-school-serenity-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSerenityPrivateServerKeywordPage />;
}

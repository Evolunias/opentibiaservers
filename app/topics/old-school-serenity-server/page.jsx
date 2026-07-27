import OldSchoolSerenityServerKeywordPage, { generateMetadata } from './old-school-serenity-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSerenityServerKeywordPage />;
}

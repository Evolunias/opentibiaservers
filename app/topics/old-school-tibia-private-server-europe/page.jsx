import OldSchoolTibiaPrivateServerEuropeKeywordPage, { generateMetadata } from './old-school-tibia-private-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaPrivateServerEuropeKeywordPage />;
}

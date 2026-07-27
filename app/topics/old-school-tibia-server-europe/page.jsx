import OldSchoolTibiaServerEuropeKeywordPage, { generateMetadata } from './old-school-tibia-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaServerEuropeKeywordPage />;
}

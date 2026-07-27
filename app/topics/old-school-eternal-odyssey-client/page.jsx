import OldSchoolEternalOdysseyClientKeywordPage, { generateMetadata } from './old-school-eternal-odyssey-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEternalOdysseyClientKeywordPage />;
}

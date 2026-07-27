import OldSchoolEternalOdysseyServerKeywordPage, { generateMetadata } from './old-school-eternal-odyssey-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEternalOdysseyServerKeywordPage />;
}

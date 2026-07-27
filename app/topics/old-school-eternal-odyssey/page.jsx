import OldSchoolEternalOdysseyKeywordPage, { generateMetadata } from './old-school-eternal-odyssey';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEternalOdysseyKeywordPage />;
}

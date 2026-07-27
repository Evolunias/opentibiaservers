import OldSchoolRubinotOpenTibiaKeywordPage, { generateMetadata } from './old-school-rubinot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRubinotOpenTibiaKeywordPage />;
}

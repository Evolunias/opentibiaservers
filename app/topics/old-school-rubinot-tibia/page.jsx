import OldSchoolRubinotTibiaKeywordPage, { generateMetadata } from './old-school-rubinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRubinotTibiaKeywordPage />;
}

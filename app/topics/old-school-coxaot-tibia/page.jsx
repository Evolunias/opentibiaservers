import OldSchoolCoxaotTibiaKeywordPage, { generateMetadata } from './old-school-coxaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCoxaotTibiaKeywordPage />;
}

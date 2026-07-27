import OldSchoolCoxaotOpenTibiaKeywordPage, { generateMetadata } from './old-school-coxaot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCoxaotOpenTibiaKeywordPage />;
}

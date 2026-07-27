import OldSchoolCyntaraOpenTibiaKeywordPage, { generateMetadata } from './old-school-cyntara-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCyntaraOpenTibiaKeywordPage />;
}

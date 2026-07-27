import OldSchoolClassickDrakoriaTibiaKeywordPage, { generateMetadata } from './old-school-classick-drakoria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassickDrakoriaTibiaKeywordPage />;
}

import OldSchoolThorniaTibiaKeywordPage, { generateMetadata } from './old-school-thornia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThorniaTibiaKeywordPage />;
}

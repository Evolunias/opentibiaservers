import CanobOldSchoolServerPolandKeywordPage, { generateMetadata } from './canob-old-school-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobOldSchoolServerPolandKeywordPage />;
}

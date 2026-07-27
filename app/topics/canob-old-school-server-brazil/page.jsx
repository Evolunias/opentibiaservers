import CanobOldSchoolServerBrazilKeywordPage, { generateMetadata } from './canob-old-school-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobOldSchoolServerBrazilKeywordPage />;
}

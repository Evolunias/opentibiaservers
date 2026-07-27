import CanobOldSchoolServerEuropeKeywordPage, { generateMetadata } from './canob-old-school-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobOldSchoolServerEuropeKeywordPage />;
}

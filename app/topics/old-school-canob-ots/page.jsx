import OldSchoolCanobOtsKeywordPage, { generateMetadata } from './old-school-canob-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCanobOtsKeywordPage />;
}

import OldSchoolCanobOfficialKeywordPage, { generateMetadata } from './old-school-canob-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCanobOfficialKeywordPage />;
}

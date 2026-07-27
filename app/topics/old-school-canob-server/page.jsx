import OldSchoolCanobServerKeywordPage, { generateMetadata } from './old-school-canob-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCanobServerKeywordPage />;
}

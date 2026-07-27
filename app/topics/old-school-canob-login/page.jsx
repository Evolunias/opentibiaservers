import OldSchoolCanobLoginKeywordPage, { generateMetadata } from './old-school-canob-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCanobLoginKeywordPage />;
}

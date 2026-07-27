import OldSchoolCanobRegisterKeywordPage, { generateMetadata } from './old-school-canob-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCanobRegisterKeywordPage />;
}

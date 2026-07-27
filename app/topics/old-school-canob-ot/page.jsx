import OldSchoolCanobOtKeywordPage, { generateMetadata } from './old-school-canob-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCanobOtKeywordPage />;
}

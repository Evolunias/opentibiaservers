import OldSchoolCanobOtServerKeywordPage, { generateMetadata } from './old-school-canob-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCanobOtServerKeywordPage />;
}

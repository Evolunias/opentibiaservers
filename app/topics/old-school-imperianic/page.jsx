import OldSchoolImperianicKeywordPage, { generateMetadata } from './old-school-imperianic';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolImperianicKeywordPage />;
}

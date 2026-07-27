import OtlandOldSchoolKeywordPage, { generateMetadata } from './otland-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandOldSchoolKeywordPage />;
}

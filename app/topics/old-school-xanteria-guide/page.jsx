import OldSchoolXanteriaGuideKeywordPage, { generateMetadata } from './old-school-xanteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolXanteriaGuideKeywordPage />;
}

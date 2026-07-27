import OldSchoolXanteriaKeywordPage, { generateMetadata } from './old-school-xanteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolXanteriaKeywordPage />;
}

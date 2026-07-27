import OldSchoolXanteriaOtsKeywordPage, { generateMetadata } from './old-school-xanteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolXanteriaOtsKeywordPage />;
}

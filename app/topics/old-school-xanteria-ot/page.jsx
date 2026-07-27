import OldSchoolXanteriaOtKeywordPage, { generateMetadata } from './old-school-xanteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolXanteriaOtKeywordPage />;
}

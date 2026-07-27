import OldSchoolXanteriaOtServerKeywordPage, { generateMetadata } from './old-school-xanteria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolXanteriaOtServerKeywordPage />;
}

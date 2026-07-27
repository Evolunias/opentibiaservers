import OldSchoolXanteriaClientKeywordPage, { generateMetadata } from './old-school-xanteria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolXanteriaClientKeywordPage />;
}

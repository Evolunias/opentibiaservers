import OldSchoolXanteriaLoginKeywordPage, { generateMetadata } from './old-school-xanteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolXanteriaLoginKeywordPage />;
}

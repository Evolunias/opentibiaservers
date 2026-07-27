import OldSchoolXanteriaServerKeywordPage, { generateMetadata } from './old-school-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolXanteriaServerKeywordPage />;
}

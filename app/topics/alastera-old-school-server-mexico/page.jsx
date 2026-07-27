import AlasteraOldSchoolServerMexicoKeywordPage, { generateMetadata } from './alastera-old-school-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraOldSchoolServerMexicoKeywordPage />;
}

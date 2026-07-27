import AlasteraOldSchoolServerNorthAmericaKeywordPage, { generateMetadata } from './alastera-old-school-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraOldSchoolServerNorthAmericaKeywordPage />;
}

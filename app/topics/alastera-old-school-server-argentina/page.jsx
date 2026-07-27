import AlasteraOldSchoolServerArgentinaKeywordPage, { generateMetadata } from './alastera-old-school-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraOldSchoolServerArgentinaKeywordPage />;
}

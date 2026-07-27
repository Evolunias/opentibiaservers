import AmeriaOldSchoolServerCanadaKeywordPage, { generateMetadata } from './ameria-old-school-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaOldSchoolServerCanadaKeywordPage />;
}

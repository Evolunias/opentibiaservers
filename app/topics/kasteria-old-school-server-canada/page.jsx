import KasteriaOldSchoolServerCanadaKeywordPage, { generateMetadata } from './kasteria-old-school-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaOldSchoolServerCanadaKeywordPage />;
}

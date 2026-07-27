import SaintsotCustomMapServerLatinAmericaKeywordPage, { generateMetadata } from './saintsot-custom-map-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotCustomMapServerLatinAmericaKeywordPage />;
}

import TibiameCustomMapServerUkKeywordPage, { generateMetadata } from './tibiame-custom-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameCustomMapServerUkKeywordPage />;
}

import TibiameCanadaServersKeywordPage, { generateMetadata } from './tibiame-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameCanadaServersKeywordPage />;
}

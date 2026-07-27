import TibiameCanadaServerKeywordPage, { generateMetadata } from './tibiame-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameCanadaServerKeywordPage />;
}

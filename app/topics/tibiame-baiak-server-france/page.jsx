import TibiameBaiakServerFranceKeywordPage, { generateMetadata } from './tibiame-baiak-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameBaiakServerFranceKeywordPage />;
}

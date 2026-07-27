import TibiameBaiakServerLatinAmericaKeywordPage, { generateMetadata } from './tibiame-baiak-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameBaiakServerLatinAmericaKeywordPage />;
}

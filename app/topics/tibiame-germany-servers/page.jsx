import TibiameGermanyServersKeywordPage, { generateMetadata } from './tibiame-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameGermanyServersKeywordPage />;
}

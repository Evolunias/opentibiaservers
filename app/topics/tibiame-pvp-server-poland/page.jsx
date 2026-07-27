import TibiamePvpServerPolandKeywordPage, { generateMetadata } from './tibiame-pvp-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiamePvpServerPolandKeywordPage />;
}

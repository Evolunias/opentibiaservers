import TibiameOtsKeywordPage, { generateMetadata } from './tibiame-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameOtsKeywordPage />;
}

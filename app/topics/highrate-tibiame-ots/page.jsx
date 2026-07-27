import HighrateTibiameOtsKeywordPage, { generateMetadata } from './highrate-tibiame-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiameOtsKeywordPage />;
}

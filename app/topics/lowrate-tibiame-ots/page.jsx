import LowrateTibiameOtsKeywordPage, { generateMetadata } from './lowrate-tibiame-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiameOtsKeywordPage />;
}

import LowrateTibiameOtKeywordPage, { generateMetadata } from './lowrate-tibiame-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiameOtKeywordPage />;
}

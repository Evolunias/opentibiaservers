import HighrateTibiameOtKeywordPage, { generateMetadata } from './highrate-tibiame-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiameOtKeywordPage />;
}

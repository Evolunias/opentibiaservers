import HighrateTibiameOtServerKeywordPage, { generateMetadata } from './highrate-tibiame-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiameOtServerKeywordPage />;
}

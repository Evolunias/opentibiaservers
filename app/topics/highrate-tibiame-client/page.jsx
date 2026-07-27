import HighrateTibiameClientKeywordPage, { generateMetadata } from './highrate-tibiame-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiameClientKeywordPage />;
}

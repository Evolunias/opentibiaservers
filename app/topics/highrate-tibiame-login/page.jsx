import HighrateTibiameLoginKeywordPage, { generateMetadata } from './highrate-tibiame-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiameLoginKeywordPage />;
}

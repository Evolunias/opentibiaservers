import HighrateTibiameKeywordPage, { generateMetadata } from './highrate-tibiame';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiameKeywordPage />;
}

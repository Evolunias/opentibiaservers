import LowrateTibiameKeywordPage, { generateMetadata } from './lowrate-tibiame';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiameKeywordPage />;
}

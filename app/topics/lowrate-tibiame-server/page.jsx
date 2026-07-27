import LowrateTibiameServerKeywordPage, { generateMetadata } from './lowrate-tibiame-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiameServerKeywordPage />;
}

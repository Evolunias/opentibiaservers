import TibiameUkServerKeywordPage, { generateMetadata } from './tibiame-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameUkServerKeywordPage />;
}

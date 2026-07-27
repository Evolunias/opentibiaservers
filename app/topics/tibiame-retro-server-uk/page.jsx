import TibiameRetroServerUkKeywordPage, { generateMetadata } from './tibiame-retro-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameRetroServerUkKeywordPage />;
}

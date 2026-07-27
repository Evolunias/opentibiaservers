import TibiameRetroServerPolandKeywordPage, { generateMetadata } from './tibiame-retro-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameRetroServerPolandKeywordPage />;
}

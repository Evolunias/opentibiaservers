import TibiaraRetroServerArgentinaKeywordPage, { generateMetadata } from './tibiara-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraRetroServerArgentinaKeywordPage />;
}

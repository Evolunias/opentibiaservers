import OlderaRetroServerArgentinaKeywordPage, { generateMetadata } from './oldera-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaRetroServerArgentinaKeywordPage />;
}

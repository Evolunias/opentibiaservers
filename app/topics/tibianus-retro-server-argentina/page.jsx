import TibianusRetroServerArgentinaKeywordPage, { generateMetadata } from './tibianus-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusRetroServerArgentinaKeywordPage />;
}

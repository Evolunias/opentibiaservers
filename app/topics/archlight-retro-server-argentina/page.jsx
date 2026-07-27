import ArchlightRetroServerArgentinaKeywordPage, { generateMetadata } from './archlight-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightRetroServerArgentinaKeywordPage />;
}

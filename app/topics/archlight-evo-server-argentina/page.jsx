import ArchlightEvoServerArgentinaKeywordPage, { generateMetadata } from './archlight-evo-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightEvoServerArgentinaKeywordPage />;
}

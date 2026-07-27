import ArchlightEvoServerUsaKeywordPage, { generateMetadata } from './archlight-evo-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightEvoServerUsaKeywordPage />;
}

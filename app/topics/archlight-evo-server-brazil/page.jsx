import ArchlightEvoServerBrazilKeywordPage, { generateMetadata } from './archlight-evo-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightEvoServerBrazilKeywordPage />;
}

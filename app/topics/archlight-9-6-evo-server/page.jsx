import Archlight96EvoServerKeywordPage, { generateMetadata } from './archlight-9-6-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight96EvoServerKeywordPage />;
}

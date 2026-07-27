import EvoServerArgentinaKeywordPage, { generateMetadata } from './evo-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerArgentinaKeywordPage />;
}

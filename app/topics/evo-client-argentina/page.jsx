import EvoClientArgentinaKeywordPage, { generateMetadata } from './evo-client-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoClientArgentinaKeywordPage />;
}

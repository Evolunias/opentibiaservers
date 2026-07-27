import EvoStatusArgentinaKeywordPage, { generateMetadata } from './evo-status-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoStatusArgentinaKeywordPage />;
}

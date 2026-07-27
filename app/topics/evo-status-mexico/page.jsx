import EvoStatusMexicoKeywordPage, { generateMetadata } from './evo-status-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoStatusMexicoKeywordPage />;
}

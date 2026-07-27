import EvoStatusSwedenKeywordPage, { generateMetadata } from './evo-status-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoStatusSwedenKeywordPage />;
}

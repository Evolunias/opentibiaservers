import EvoStatusCanadaKeywordPage, { generateMetadata } from './evo-status-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoStatusCanadaKeywordPage />;
}

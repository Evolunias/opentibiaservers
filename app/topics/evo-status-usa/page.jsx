import EvoStatusUsaKeywordPage, { generateMetadata } from './evo-status-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoStatusUsaKeywordPage />;
}

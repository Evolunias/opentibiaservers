import EvoStatusPolandKeywordPage, { generateMetadata } from './evo-status-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoStatusPolandKeywordPage />;
}

import EvoClientGermanyKeywordPage, { generateMetadata } from './evo-client-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoClientGermanyKeywordPage />;
}

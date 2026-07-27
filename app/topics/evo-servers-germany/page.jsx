import EvoServersGermanyKeywordPage, { generateMetadata } from './evo-servers-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServersGermanyKeywordPage />;
}

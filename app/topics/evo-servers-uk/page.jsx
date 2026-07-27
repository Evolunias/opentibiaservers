import EvoServersUkKeywordPage, { generateMetadata } from './evo-servers-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServersUkKeywordPage />;
}

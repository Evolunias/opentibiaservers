import EvoServersLatinAmericaKeywordPage, { generateMetadata } from './evo-servers-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServersLatinAmericaKeywordPage />;
}

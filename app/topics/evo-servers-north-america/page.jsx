import EvoServersNorthAmericaKeywordPage, { generateMetadata } from './evo-servers-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServersNorthAmericaKeywordPage />;
}

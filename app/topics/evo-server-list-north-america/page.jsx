import EvoServerListNorthAmericaKeywordPage, { generateMetadata } from './evo-server-list-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerListNorthAmericaKeywordPage />;
}

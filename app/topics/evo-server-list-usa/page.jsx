import EvoServerListUsaKeywordPage, { generateMetadata } from './evo-server-list-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerListUsaKeywordPage />;
}

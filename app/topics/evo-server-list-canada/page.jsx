import EvoServerListCanadaKeywordPage, { generateMetadata } from './evo-server-list-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerListCanadaKeywordPage />;
}

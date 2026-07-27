import EvoClientSwedenKeywordPage, { generateMetadata } from './evo-client-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoClientSwedenKeywordPage />;
}

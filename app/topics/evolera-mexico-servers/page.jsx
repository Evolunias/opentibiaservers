import EvoleraMexicoServersKeywordPage, { generateMetadata } from './evolera-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraMexicoServersKeywordPage />;
}

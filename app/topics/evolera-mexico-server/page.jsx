import EvoleraMexicoServerKeywordPage, { generateMetadata } from './evolera-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraMexicoServerKeywordPage />;
}

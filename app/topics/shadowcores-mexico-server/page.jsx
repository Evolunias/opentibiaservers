import ShadowcoresMexicoServerKeywordPage, { generateMetadata } from './shadowcores-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresMexicoServerKeywordPage />;
}

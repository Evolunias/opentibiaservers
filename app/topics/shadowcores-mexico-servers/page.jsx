import ShadowcoresMexicoServersKeywordPage, { generateMetadata } from './shadowcores-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresMexicoServersKeywordPage />;
}

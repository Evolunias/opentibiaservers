import AureraGlobalMexicoServerKeywordPage, { generateMetadata } from './aurera-global-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalMexicoServerKeywordPage />;
}

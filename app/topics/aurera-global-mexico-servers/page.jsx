import AureraGlobalMexicoServersKeywordPage, { generateMetadata } from './aurera-global-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalMexicoServersKeywordPage />;
}

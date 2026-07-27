import UnlineMexicoServersKeywordPage, { generateMetadata } from './unline-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineMexicoServersKeywordPage />;
}

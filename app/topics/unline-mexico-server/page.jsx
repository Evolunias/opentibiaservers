import UnlineMexicoServerKeywordPage, { generateMetadata } from './unline-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineMexicoServerKeywordPage />;
}

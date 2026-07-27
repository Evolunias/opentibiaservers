import EvoClassicusServerKeywordPage, { generateMetadata } from './evo-classicus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoClassicusServerKeywordPage />;
}

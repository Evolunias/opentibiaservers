import EvoLumineraServerKeywordPage, { generateMetadata } from './evo-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoLumineraServerKeywordPage />;
}

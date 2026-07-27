import EvoTibiameServersKeywordPage, { generateMetadata } from './evo-tibiame-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoTibiameServersKeywordPage />;
}

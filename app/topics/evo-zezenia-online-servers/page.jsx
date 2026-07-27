import EvoZezeniaOnlineServersKeywordPage, { generateMetadata } from './evo-zezenia-online-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoZezeniaOnlineServersKeywordPage />;
}

import EvoZezeniaOnlineServerKeywordPage, { generateMetadata } from './evo-zezenia-online-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoZezeniaOnlineServerKeywordPage />;
}

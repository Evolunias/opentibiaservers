import LowrateZezeniaOnlineServerKeywordPage, { generateMetadata } from './lowrate-zezenia-online-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateZezeniaOnlineServerKeywordPage />;
}

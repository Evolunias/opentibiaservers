import HighrateZezeniaOnlineClientKeywordPage, { generateMetadata } from './highrate-zezenia-online-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateZezeniaOnlineClientKeywordPage />;
}

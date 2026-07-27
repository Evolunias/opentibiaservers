import ActiveZezeniaOnlineClientKeywordPage, { generateMetadata } from './active-zezenia-online-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveZezeniaOnlineClientKeywordPage />;
}

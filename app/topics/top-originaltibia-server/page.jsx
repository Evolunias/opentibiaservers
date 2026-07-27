import TopOriginaltibiaServerKeywordPage, { generateMetadata } from './top-originaltibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOriginaltibiaServerKeywordPage />;
}

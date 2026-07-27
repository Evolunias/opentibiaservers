import OriginaltibiaServerKeywordPage, { generateMetadata } from './originaltibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaServerKeywordPage />;
}

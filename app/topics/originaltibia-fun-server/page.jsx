import OriginaltibiaFunServerKeywordPage, { generateMetadata } from './originaltibia-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaFunServerKeywordPage />;
}

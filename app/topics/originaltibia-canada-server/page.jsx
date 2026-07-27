import OriginaltibiaCanadaServerKeywordPage, { generateMetadata } from './originaltibia-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaCanadaServerKeywordPage />;
}

import OriginaltibiaRealMapKeywordPage, { generateMetadata } from './originaltibia-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaRealMapKeywordPage />;
}

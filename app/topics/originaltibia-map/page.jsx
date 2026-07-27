import OriginaltibiaMapKeywordPage, { generateMetadata } from './originaltibia-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaMapKeywordPage />;
}

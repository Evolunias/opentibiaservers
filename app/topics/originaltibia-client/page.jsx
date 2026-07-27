import OriginaltibiaClientKeywordPage, { generateMetadata } from './originaltibia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaClientKeywordPage />;
}

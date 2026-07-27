import OriginaltibiaPolandServerKeywordPage, { generateMetadata } from './originaltibia-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaPolandServerKeywordPage />;
}

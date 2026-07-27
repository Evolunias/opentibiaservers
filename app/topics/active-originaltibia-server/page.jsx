import ActiveOriginaltibiaServerKeywordPage, { generateMetadata } from './active-originaltibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOriginaltibiaServerKeywordPage />;
}

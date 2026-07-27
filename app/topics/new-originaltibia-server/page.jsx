import NewOriginaltibiaServerKeywordPage, { generateMetadata } from './new-originaltibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOriginaltibiaServerKeywordPage />;
}

import ActiveOlderaPrivateServerKeywordPage, { generateMetadata } from './active-oldera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOlderaPrivateServerKeywordPage />;
}

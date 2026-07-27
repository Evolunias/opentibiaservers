import TopRealeraPrivateServerKeywordPage, { generateMetadata } from './top-realera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealeraPrivateServerKeywordPage />;
}

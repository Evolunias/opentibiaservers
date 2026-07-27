import TopRealeraServerKeywordPage, { generateMetadata } from './top-realera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealeraServerKeywordPage />;
}

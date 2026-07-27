import TopRealestaServerKeywordPage, { generateMetadata } from './top-realesta-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealestaServerKeywordPage />;
}

import TopRealestaLoginKeywordPage, { generateMetadata } from './top-realesta-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealestaLoginKeywordPage />;
}

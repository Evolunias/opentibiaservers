import TopRealestaKeywordPage, { generateMetadata } from './top-realesta';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealestaKeywordPage />;
}

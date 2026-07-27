import TopRealeraKeywordPage, { generateMetadata } from './top-realera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealeraKeywordPage />;
}

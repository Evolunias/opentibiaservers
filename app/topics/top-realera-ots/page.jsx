import TopRealeraOtsKeywordPage, { generateMetadata } from './top-realera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealeraOtsKeywordPage />;
}
